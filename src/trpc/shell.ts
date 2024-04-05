import { z } from "zod";
import { router, shellProcedure } from "./config";
import { db } from "@/db";
import { TRPCError } from "@trpc/server";
import { UTApi } from "uploadthing/server";

export const ShellRouter = router({
  getUserFiles: shellProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.file.findMany({
      where: {
        userId,
        isSecured: true,
      },
    });
  }),
  getFile: shellProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = db.file.findFirst({
        where: {
          key: input.key,
          userId,
          isSecured: true,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      return file;
    }),
  deleteFile: shellProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({
        where: {
          id: input.id,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      const utApi = new UTApi();
      const { success: isDeleted } = await utApi.deleteFiles(file.key);

      if (!isDeleted)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong! Please try again",
        });

      await db.file.delete({
        where: {
          id: input.id,
        },
      });

      return file;
    }),
});
