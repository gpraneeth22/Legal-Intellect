"use client"
import { trpc } from "@/app/_trpc/client";
import { BotChatContextProvider } from "./BotChatContext";
import BotChatMessages from "./BotChatMessages";
import BotChatInput from "./BotChatInput";

interface BotChatWrapperProps {
    chatId: string;
    // isSubscribed: boolean
  }


const BotChatBox = ({chatId}:BotChatWrapperProps) => {
    
      return (
        <BotChatContextProvider chatId={chatId}>
          <div className="relative flex w-full mx-4 min-h-full max-h-[calc(100vh-4rem)] flex-col justify-between gap-2 divide-y divide-zinc-200 shadow-xl drop-shadow-lg bg-zinc-50">
            <div className="mb-28 flex flex-1 flex-col justify-between">
              <BotChatMessages chatId={chatId} />
            </div>
    
            <BotChatInput />
          </div>
        </BotChatContextProvider>
      );
}

export default BotChatBox