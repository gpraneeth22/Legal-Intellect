import notFound from "@/app/not-found";
import BotChatBox from "@/components/bot-chat-box/BotChatBox";
import BotChatSideMenu from "@/components/bot-chat-box/BotChatSideMenu";
import ChatBox from "@/components/chat-box/ChatBox";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface BotChatPageProps {
  params: { chatId: string };
}

const BotChatPage = async ({ params }: BotChatPageProps) => {
  const { chatId } = params;

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${chatId}`);

  const chat = await db.botChat.findFirst({
    where: {
      id: chatId,
      userId: user.id,
    },
  });

  if (!chat) return notFound();

  return (
    <div className="flex">
      <BotChatSideMenu userId={user.id} chatId={chatId} />
      <BotChatBox chatId={chatId} />
    </div>
  );
};

export default BotChatPage;
