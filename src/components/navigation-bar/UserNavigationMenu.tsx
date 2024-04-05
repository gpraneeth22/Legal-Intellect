"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AlignEndHorizontal, Clock7, Scale, ShieldCheck } from "lucide-react";
import { navBarItems } from "./NavbarItems";
import NavbarLink from "./NavbarLink";
import { Badge } from "../ui/badge";

interface UserNavigationMenuProps {
  isLoggedIn: boolean;
  isAdvisor: boolean | undefined;
  isAdmin: boolean | undefined;
}

export function UserNavigationMenu({
  isLoggedIn,
  isAdvisor,
  isAdmin,
}: UserNavigationMenuProps) {
  return isLoggedIn ? (
    <NavigationMenu>
      <NavigationMenuList className=" space-x-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <AlignEndHorizontal className="h-7 w-7 bg-white p-1 rounded-full text-purple-800 mr-1 " />{" "}
            LawQue
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/our/lawque"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">LawQue</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The Best AI Chat Bot answer your Legal Queries
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/dashboard" title="Chat with PDF">
                Upload you Legal Document and start Asking Questions.
              </ListItem>
              <ListItem href="/dashboard" title="Chat with LawQ">
                Start a quick chat with LawQ and get Assistance.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {isAdvisor ? (
          <NavigationMenuItem>
            <Link href="/dashboard/appointments" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Clock7 className="h-7 w-7 bg-white p-1 rounded-full mr-1 text-purple-800" />{" "}
                Your Appointments
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Scale className="h-7 w-7 bg-white p-1 rounded-full mr-1 text-purple-800" />{" "}
              Lawyers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <Scale className="h-6 w-6 text-purple-800" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Legal Advisor
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Platform where you can find a best Legal Advisor
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/dashboard/appointments"
                  title="Schedule an Appointment"
                >
                  Schedule an Appointment with well Practiced Lawyers.
                </ListItem>
                <ListItem
                  href="/dashboard"
                  title="Chat with Attorney (coming soon)"
                >
                  Chat with Attorney to get assistance in your Legal
                  Proceedings.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <Link href="/secure/shell" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <ShieldCheck className="h-7 w-7 bg-white p-1 rounded-full mr-1 text-purple-800" />{" "}
              Secure Shell
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/queries" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Icons.MessageQuestion />{" "}
              {isAdvisor ? "Answer a Question" : "Ask a Question"}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <ol className=" hidden md:flex max-w-2xl items-center text-white text-md font-semibold space-x-16 text-center">
      {navBarItems.map((item) => {
        return (
          <NavbarLink key={item.route} route={item.route}>
            <li>{item.head}</li>
          </NavbarLink>
        );
      })}
    </ol>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
