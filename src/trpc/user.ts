import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  adminProcedure,
  privateProcedure,
  publicProcedure,
  router,
} from "@/trpc/config";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { QuestionFormSchema } from "@/types/questionFormSchema";
import { z } from "zod";
import { ScheduleAppointmetSchema } from "@/types/scheduleAppoinemtForm";
import { AppointmentStatus } from "@prisma/client";

export const UserRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const currentUser = getUser();

    if (!currentUser.id || !currentUser.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    //check user in Database
    const dbUser = await db.user.findFirst({
      where: {
        id: currentUser.id,
      },
    });

    if (!dbUser) {
      // create user in DB
      await db.user.create({
        data: {
          id: currentUser.id,
          email: currentUser.email,
          first_name: currentUser.given_name,
          last_name: currentUser.family_name,
        },
      });
    }

    return { success: true, user: dbUser };
  }),
  getUserByEmail: privateProcedure.query(async ({ ctx }) => {
    if (ctx.email) {
      return await db.user.findFirst({
        where: {
          email: ctx.email,
        },
      });
    }
  }),
  getUserRole: privateProcedure.query(async ({ ctx }) => {
    return await db.user.findUnique({
      where: {
        id: ctx.userId,
      },
      select: {
        is_advisor: true,
        id: true,
      },
    });
  }),
  askQuestion: publicProcedure
    .input(QuestionFormSchema)
    .mutation(async ({ input }) => {
      return await db.userQueries.create({
        data: {
          userEmail: input.email!,
          userName: input.name!,
          userLocation: input.city,
          queryCategory: input.category,
          querySubject: input.subject,
          userQuery: input.query,
        },
      });
    }),
  answerQuestion: privateProcedure
    .input(z.object({ queryId: z.string(), answer: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { queryId, answer } = input;
      const { userId } = ctx;
      const userRole = await db.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          is_advisor: true,
        },
      });
      if (!userRole?.is_advisor) {
        throw new TRPCError({
          message: "You don't have permission to perform this Action",
          code: "FORBIDDEN",
        });
      }
      await db.userQueries.update({
        where: {
          id: queryId,
        },
        data: {
          isAnswered: true,
          answer: answer,
          lawyerId: userId,
        },
      });
    }),
  getUserQueriesByEmail: privateProcedure.query(async ({ ctx }) => {
    if (!ctx.email) {
      throw new TRPCError({
        message: "Cannot find your Email. Please Login",
        code: "UNAUTHORIZED",
      });
    }
    const userQueries = await db.userQueries.findMany({
      where: {
        userEmail: ctx.email,
      },
    });
    return userQueries;
  }),
  getUserAppointments: privateProcedure.query(async ({ ctx }) => {
    const { email, userId } = ctx;

    const appointments = await db.user.findFirst({
      select: {
        appointments: true,
      },
      where: {
        id: userId,
      },
    });
    return appointments;
  }),
  scheduleAppointment: privateProcedure
    .input(ScheduleAppointmetSchema)
    .mutation(async ({ input, ctx }) => {
      const { userId } = ctx;
      const {
        date,
        lawyer: lawyerId,
        category,
        city,
        subject,
        mobile: phNumber,
      } = input;

      const appointment = await db.appointments.create({
        data: {
          userId: userId,
          category: category,
          location: city,
          layerId: lawyerId,
          mobileNumber: phNumber,
          subject: subject,
          scheduledAt: date,
          status: "PENDING",
          isApproved: false,
        },
      });
    }),
  cancelAppointment: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const { userId } = ctx;
      await db.appointments.update({
        where: {
          id,
          userId,
        },
        data: {
          status: "CANCELLED",
        },
      });
    }),
  getLegalAdvisors: privateProcedure.query(async () => {
    return await db.user.findMany({
      where: {
        is_advisor: true,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        rating: true,
      },
    });
  }),
  approveAppointment: privateProcedure
    .input(z.object({ id: z.string(), currentStatus: z.string() }))
    .mutation(async ({ input }) => {
      const { id, currentStatus } = input;
      var updateStatus: AppointmentStatus = "PENDING";

      switch (currentStatus) {
        case "PENDING":
          updateStatus = "SCHEDULED";
          break;
        case "SCHEDULED":
          updateStatus = "PARTIAL";
          break;
        case "PARTIAL":
          updateStatus = "COMPLETED";
          break;
        default:
          throw new TRPCError({ code: "BAD_REQUEST" });
      }

      await db.appointments.update({
        where: {
          id,
        },
        data: {
          status: updateStatus,
        },
      });
    }),
  rejectAppointment: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const { userId } = ctx;
      const userRole = await db.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          is_advisor: true,
        },
      });
      if (!userRole?.is_advisor) {
        throw new TRPCError({
          message: "You don't have permission to perform this Action",
          code: "FORBIDDEN",
        });
      }
      await db.appointments.update({
        where: {
          id,
        },
        data: {
          status: "REJECTED",
        },
      });
    }),
});
