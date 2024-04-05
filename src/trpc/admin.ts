import { TRPCError } from "@trpc/server";
import { adminProcedure, router } from "@/trpc/config";
import { db } from "@/db";
import { z } from "zod";

export const AdminRouter = router({
  getAllUsers: adminProcedure.query(async () => {
    return await db.user.findMany({
      select: {
        email: true,
        first_name: true,
        last_name: true,
        joinedAt: true,
        is_admin: true,
        is_advisor: true,
        rating: true,
      },
      orderBy: {
        joinedAt: "desc",
      },
    });
  }),
  updateUserRole: adminProcedure
    .input(
      z.object({
        email: z.string(),
        is_admin: z.boolean(),
        is_advisor: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!ctx.userId) throw new TRPCError({ code: "FORBIDDEN" });
      const user = await db.user.update({
        where: {
          email: input.email,
        },
        data: {
          is_admin: input.is_admin,
          is_advisor: input.is_advisor,
        },
      });
      return { success: true };
    }),
});
