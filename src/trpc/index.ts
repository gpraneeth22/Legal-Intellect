import {router} from "@/trpc/config";
import { AdminRouter } from "@/trpc/admin";
import { UserRouter } from "@/trpc/user";
import { FileRouter } from "@/trpc/file";
import { StripeRouter } from "@/trpc/stripe";
import { BotMessageRouter as LawqueRouter } from "./botMessage";
import { ShellRouter } from "./shell";

export const appRouter = router({
  user: UserRouter,
  admin: AdminRouter,
  file: FileRouter,
  bot: LawqueRouter,
  shell: ShellRouter,
  payment: StripeRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
