"use client";
import {
  Loader,
  Scale,
} from "lucide-react";
import { Separator } from "../ui/separator";
import StartConversation from "../dashboard/StartConversation";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import { trpc } from "@/app/_trpc/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface BotChatSideMenuProps {
  userId: string;
  chatId: string
}

const BotChatSideMenu = ({ userId, chatId }: BotChatSideMenuProps) => {
  const {
    data: userChats,
    isLoading,
    isError,
  } = trpc.bot.getBotChats.useQuery();
  if (isError) {
    return toast.error("Something went wrong!");
  }

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="left-0 border-zinc-400 border-r-2 z-40 w-64 h-[calc(100vh-4rem)] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {isLoading ? (
          <Loader className="animate-spin text-purple-800" />
        ) : (
          <div className="h-full px-1 py-4 bg-gray-50 dark:bg-gray-800 drop-shadow-lg">
            
              <Button
                variant="ghost"
                className=" flex items-center text-lg px-3"
              >
                <Icons.Messages className=" text-purple-800 mr-2" /> Recent
                Conversations
              </Button>
            
            <Separator className=" my-2" />
              <StartConversation classname=" w-full mb-2" title="New Chat" />
            <ul className="space-y-2 max-h-full scroll-smooth font-medium overflow-y-auto">
              {userChats!.map((chat, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={`/dashboard/lawq/${chat.id}`}
                      className={cn("flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", {"border-2 border-purple-800 ring-purple-800" : chatId == chat.id})}
                    >
                      <Scale />
                      <span className="ms-3">{chat.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <div className="fixed w-full px-1 mb-2 left-0 bottom-0">
            <Separator className="my-2 w-full" />
            <StartConversation classname=" w-full" />
          </div> */}
          </div>
        )}
      </aside>
    </div>
  );
};

export default BotChatSideMenu;
