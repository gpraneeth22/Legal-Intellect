import { db } from "@/db";
import { openai } from "@/lib/openai";
import { sendBotMessageValidator } from "@/lib/validators/sendBotMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { getUser } = getKindeServerSession();
  const user = getUser();

  const { id: userId } = user;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { chatId, message } = sendBotMessageValidator.parse(body);

  const chat = await db.botChat.findFirst({
    where: {
      id: chatId,
      userId: userId,
    },
  });

  if (!chat) NextResponse.json({ error: "Chat not found" }, { status: 400 });

  await db.botChatMessage.create({
    data: {
      userId: userId,
      text: message,
      botChatId: chatId,
      isUserMessage: true,
    },
  });

  const previousMessages = await db.botChatMessage.findMany({
    where: {
      botChatId: chatId,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 6,
  });

  const formattedPrevMessages = previousMessages.map((msg) => ({
    role: msg.isUserMessage ? "User" : "LawQ",
    content: msg.text,
  }));

  const botResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Your name is LawQ. Always refer yourself as LawQ.The LawQ is talkative and provides lots of specific details about Indian Law and can address Indian Leal Issues based on Indian Penal Code. Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.",
      },
      {
        role: "user",
        content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.

      \n----------------\n

      PREVIOUS CONVERSATION:
      ${formattedPrevMessages.map((message) => {
        if (message.role === "User") return `User: ${message.content}\n`;
        return `LawQ: ${message.content}\n`;
      })}

      USER INPUT: ${message}

      \n----------------\n

      Note: !!!Please Warn the User to the questions or prompts .NOT related to Legal and Law Activities and Advices!!!. If user conintues to ask random questions, Do not answer his question. Ask user to change the Question`,
      },
    ],
  });

  const botResponseStream = OpenAIStream(botResponse, {
    async onCompletion(completion) {
      await db.botChatMessage.create({
        data: {
          text: completion,
          botChatId: chatId,
          isUserMessage: false,
          userId: userId,
        },
      });
    },
  });

  return new StreamingTextResponse(botResponseStream);
};
