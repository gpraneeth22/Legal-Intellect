"use client";
import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { trpc } from "@/app/_trpc/client";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const UserAccountMenu = () => {
  const { data } = trpc.user.authCallback.useQuery(undefined);
  var userName = "User";
  if (data?.user?.first_name) {
    userName = data?.user?.first_name;
    if (data?.user?.last_name) {
      userName = userName + " " + data?.user?.last_name;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger className="flex items-center cursor-pointer space-x-2">
                <Avatar className=" text-purple-700">
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <p className=" text-white text-lg">{userName}</p>
            </TooltipTrigger>
            <TooltipContent className="pointer-events-none">
              <p>My Account</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
        {/* <h1 className="h-fit">User</h1> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4 text-purple-700" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4 text-purple-700" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4 text-purple-700" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4 text-purple-700" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4 text-purple-700" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutLink>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4 text-purple-700" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserAccountMenu;
