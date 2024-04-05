import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const t = initTRPC.create();

const middleware = t.middleware;

const AuthenticatedGateway = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      userId: user.id,
      email: user.email,
    },
  });
});

const AdminGateway = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const loggedUser = getUser();

  if (!loggedUser || !loggedUser.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const user = await db.user.findFirst({
    where: {
      id: loggedUser.id,
    },
    select: {
      id: true,
      is_admin: true,
    },
  });

  if (!user?.is_admin) throw new TRPCError({ code: "FORBIDDEN" });

  return opts.next({
    ctx: {
      userId: user.id,
      is_admin: user.is_admin,
    },
  });
});

const SecureShellGateway = middleware(async (opts) => {
  const shellToken = cookies().get("shell_token");
  if (!shellToken) {
    throw new TRPCError({ message: "Permission Denied", code: "FORBIDDEN" });
  }
  try {
    const data = jwt.verify(shellToken?.value, process.env.SHELL_SECRET!);
  } catch (error) {
    throw new TRPCError({ message: "Permission Denied", code: "FORBIDDEN" });
  }

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      userId: user.id,
      email: user.email,
      isSecured: true,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(AuthenticatedGateway);
export const adminProcedure = t.procedure.use(AdminGateway);
export const shellProcedure = t.procedure.use(SecureShellGateway);
