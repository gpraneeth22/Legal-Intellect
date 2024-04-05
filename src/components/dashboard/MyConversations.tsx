"use client";
import { trpc } from "@/app/_trpc/client";
import {
  Ghost,
  Loader2,
  MessageSquare,
  MessagesSquare,
  Plus,
  Trash,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import StartConversation from "./StartConversation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const Conversations = () => {
  const utils = trpc.useContext();

  const [currentlyDeletingChat, setCurrentlyDeletingChat] = useState<
    string | null
  >(null);

  const { data: chats, isLoading } = trpc.bot.getBotChats.useQuery();

  const { mutate: deleteChat } = trpc.bot.deleteBotChat.useMutation({
    onSuccess: () => {
      utils.bot.getBotChats.invalidate();
    },
    onMutate: ({ chatId }) => {
      setCurrentlyDeletingChat(chatId);
    },
    onSettled() {
      setCurrentlyDeletingChat(null);
    },
  });

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className=" mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 text-5xl font-bold text-gray-900">
          My Conversations
        </h1>
        {/* <Start Conversation /> */}
        <StartConversation />
      </div>

      {/* Display all user files */}
      {chats && chats.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {chats
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((chat) => (
              <li
                key={chat.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <Link
                  href={`/dashboard/lawq/${chat.id}`}
                  className="flex flex-col gap-2"
                >
                  <div className="flex w-full items-center justify-between space-x-6 px-6 pt-6">
                    <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                      <MessagesSquare className=" text-white" />
                    </div>
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {chat.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 grid grid-cols-3 place-items-center gap-6 px-6 py-2 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(chat.createdAt), "MMM yyyy")}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    mocked
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger className="w-full" asChild>
                      <Button
                        className=" w-full bg-destructive-button text-destructive-buttonFG hover:bg-destructive-button/90"
                        size="sm"
                        variant="destructive"
                      >
                        {currentlyDeletingChat === chat.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash className="h-4 w-4" />
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete your chat
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteChat({ chatId: chat.id })}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <Skeleton height={100} className="my-2" count={3} />
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="text-xl font-semibold">Pretty empty around here</h3>
          <p>Start a new Conversation</p>
        </div>
      )}
    </main>
  );
};

export default Conversations;
