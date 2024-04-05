import { useContext, useEffect, useRef } from "react";
import { BotChatContext } from "./BotChatContext";
import { trpc } from "@/app/_trpc/client";
import { INFINITE_QUERY_LIMIT } from "@/config/infinite-query";
import { MessageSquare, MoreHorizontal } from "lucide-react";
import { useIntersection } from "@mantine/hooks";
import Skeleton from "react-loading-skeleton";
import BotChatMessage from "./BotChatMessage";

interface BotChatMessagesProps {
  chatId: string;
}

const BotChatMessages = ({ chatId }: BotChatMessagesProps) => {
  const { isLoading: isAiThinking } = useContext(BotChatContext);

  const { data, isLoading, fetchNextPage } =
    trpc.bot.getMessages.useInfiniteQuery(
      {
        chatId,
        limit: INFINITE_QUERY_LIMIT,
      },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        keepPreviousData: true,
      }
    );

  const messages = data?.pages.flatMap((page) => page.messages);

  const loadingMessage = {
    createdAt: new Date().toISOString(),
    id: "loading-message",
    isUserMessage: false,
    text: (
      <span className="flex h-full items-center justify-center">
        {/* <Loader2 className='h-4 w-4 animate-spin' /> */}
        <MoreHorizontal className="h-6 w-6 animate-pulse" />
      </span>
    ),
  };

  const combinedMessages = [
    ...(isAiThinking ? [loadingMessage] : []),
    ...(messages ?? []),
  ];

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const { ref, entry } = useIntersection({
    root: lastMessageRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scroll-smooth scrolling-touch">
      {combinedMessages && combinedMessages.length > 0 ? (
        combinedMessages.map((message, i) => {
          const isNextMessageSamePerson =
            combinedMessages[i - 1]?.isUserMessage ===
            combinedMessages[i]?.isUserMessage;

          if (i === combinedMessages.length - 1) {
            return (
              <BotChatMessage
                ref={ref}
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
          } else
            return (
              <BotChatMessage
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
        })
      ) : isLoading ? (
        <div className="w-full h-full flex flex-col gap-16">
          <div className="space-y-7">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="flex items-center animate-pulse">
                  <div className="h-16 w-16 bg-gray-300 dark:bg-gray-700 rounded-full mr-2"></div>
                  <div className="flex-1">
                    <div className="h-16 w-1/2 rounded-md bg-gray-200 dark:bg-gray-600 mb-1"></div>
                    <div className="h-16 w-1/4 rounded-md bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                </div>
                <div className="flex items-center justify-end animate-pulse">
                  <div className="flex-1 flex flex-col items-end">
                    <div className="h-16 w-1/4 rounded-md bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                  <div className="h-16 w-16 bg-gray-300 dark:bg-gray-700 rounded-full ml-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="h-8 w-8 text-purple-700" />
          <h3 className="font-semibold text-xl">You&apos;re all set!</h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default BotChatMessages;
