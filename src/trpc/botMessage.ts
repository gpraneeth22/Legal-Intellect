import { INFINITE_QUERY_LIMIT } from "@/config/infinite-query";
import { db } from "@/db";
import { privateProcedure, router } from "@/trpc/config";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const BotMessageRouter = router({
  createBotChat: privateProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const newChat = await db.botChat.create({
        data: {
          title: input.title,
          userId: ctx.userId,
        },
      });
      return newChat;
    }),
  getBotChats: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    const userChats = await db.botChat.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc"
      }
    });
    return userChats ;
  }),
  getMessages: privateProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        chatId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { chatId, cursor } = input;
      const limit = input.limit ?? INFINITE_QUERY_LIMIT;

      const chat = await db.botChat.findFirst({
        where: {
          id: chatId,
          userId,
        },
      });

      if (!chat) throw new TRPCError({ code: "NOT_FOUND" });

      const messages = await db.botChatMessage.findMany({
        take: limit + 1,
        where: {
          botChatId: chatId,
        },
        orderBy: {
          createdAt: "desc",
        },
        cursor: cursor ? { id: cursor } : undefined,
        select: {
          id: true,
          isUserMessage: true,
          createdAt: true,
          text: true,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;

      if (messages.length > limit) {
        const nextItem = messages.pop();
        nextCursor = nextItem?.id;
      }

      return { messages, nextCursor };
    }),
  deleteBotChat: privateProcedure
    .input(
      z.object({
        chatId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const chat = await db.botChat.findFirst({
        where: {
          id: input.chatId,
          userId,
        },
      });

      if (!chat)
        throw new TRPCError({ code: "BAD_REQUEST", message: "Chat not found" });

      const deletedChat = await db.botChat.delete({
        where: {
          id: input.chatId,
          userId,
        },
      });

      return { chatTitle: deletedChat.title };
    }),
});
