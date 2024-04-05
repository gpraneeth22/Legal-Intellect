"use client";
import { trpc } from "@/app/_trpc/client";
import {
  AlertCircle,
  AlertOctagonIcon,
  AlertTriangle,
  CheckCheck,
  CheckCircle,
  Clock7,
  Loader2,
  Plus,
  Trash,
  X,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
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
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
const MyAppointments = () => {
  const [isHovered, setIsHovered] = useState();
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);
  const [currentlyUpdating, setCurrentlyUpdating] = useState<string | null>(
    null
  );

  const utils = trpc.useContext();

  const { data: userRole } = trpc.user.getUserRole.useQuery();
  const { data, isLoading } = trpc.user.getUserAppointments.useQuery();

  const { mutate: approve } = trpc.user.approveAppointment.useMutation({
    onSuccess: () => {
      utils.user.getUserAppointments.invalidate();
    },
    onMutate: ({ id }) => {
      setCurrentlyUpdating(id);
    },
    onSettled() {
      setCurrentlyUpdating(null);
    },
  });

  const { mutate: reject } = trpc.user.rejectAppointment.useMutation({
    onSuccess: () => {
      utils.user.getUserAppointments.invalidate();
    },
    onMutate: ({ id }) => {
      setCurrentlyUpdating(id);
    },
    onSettled() {
      setCurrentlyUpdating(null);
    },
  });

  const { mutate: cancelAppointment } = trpc.user.cancelAppointment.useMutation(
    {
      onSuccess: () => {
        utils.user.getUserAppointments.invalidate();
      },
      onMutate: ({ id }) => {
        setCurrentlyDeletingFile(id);
      },
      onSettled() {
        setCurrentlyDeletingFile(null);
      },
    }
  );

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className=" mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 text-5xl font-bold text-gray-900">
          Scheduled Appointments
        </h1>
        {/* <Schedule Appointment /> */}
        <Button asChild>
          <Link
            href="/dashboard/appointments/schedule"
            className="text-md text-center"
          >
            <Clock7 /> Schedule Appointment
          </Link>
        </Button>
      </div>

      {/* Display all user files */}
      {data?.appointments && data.appointments.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {data.appointments
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((appointment) => (
              <li
                key={appointment.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <div className="relative flex flex-col gap-2">
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                      <Clock7 className=" text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className=" text-lg font-medium text-zinc-900">
                          {appointment.subject}
                        </h3>
                      </div>
                    </div>
                    <Badge className=" absolute top-2 right-1">
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(appointment.scheduledAt), "MMM yyyy")}
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-2 text-black font-semibold p-2 rounded-full",
                      {
                        "bg-orange-200": appointment.status === "PENDING",
                        "bg-green-300": appointment.status === "SCHEDULED",
                        "bg-red-300": appointment.status === "REJECTED",
                        "bg-red-200": appointment.status === "CANCELLED",
                        "bg-purple-300": appointment.status === "COMPLETED",
                        "bg-cyan-300": appointment.status === "PARTIAL",
                      }
                    )}
                  >
                    {appointment.status === "PENDING" &&
                      userRole?.id !== appointment.layerId && (
                        <div className="flex items-center justify-center text-sm cursor-default">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          {appointment.status}
                        </div>
                      )}
                    {appointment.status === "PENDING" &&
                      userRole?.id === appointment.layerId &&
                      userRole?.is_advisor && (
                        <div
                          className="flex items-center justify-center space-x-2 text-sm cursor-pointer"
                          onClick={() =>
                            approve({
                              id: appointment.id,
                              currentStatus: appointment.status,
                            })
                          }
                        >
                          {currentlyUpdating ? (
                            <Loader2 className="h-5 w-5" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 mr-1" />
                          )}
                          APPROVE
                        </div>
                      )}
                    {appointment.status === "SCHEDULED" && (
                      <div
                        className="flex items-center justify-center space-x-2 text-sm cursor-pointer"
                        onClick={() =>
                          approve({
                            id: appointment.id,
                            currentStatus: appointment.status,
                          })
                        }
                      >
                        {currentlyUpdating ? (
                          <Loader2 className="h-5 w-5" />
                        ) : (
                          <CheckCircle className="h-4 w-4 mr-1" />
                        )}
                        Completed?
                      </div>
                    )}
                    {appointment.status === "PARTIAL" && (
                      <div
                        className="flex items-center justify-center space-x-2 text-sm cursor-pointer"
                        onClick={() =>
                          approve({
                            id: appointment.id,
                            currentStatus: appointment.status,
                          })
                        }
                      >
                        {currentlyUpdating ? (
                          <Loader2 className="h-5 w-5" />
                        ) : (
                          <AlertCircle className="h-4 w-4 mr-1" />
                        )}
                        Completed?
                      </div>
                    )}
                    {appointment.status === "COMPLETED" && (
                      <div className="flex items-center justify-center space-x-2 text-sm cursor-default">
                        <CheckCheck className="h-4 w-4 mr-1" />
                        COMPLETED
                      </div>
                    )}
                    {appointment.status === "REJECTED" && (
                      <div className="flex items-center justify-center space-x-2 text-sm cursor-default">
                        <AlertOctagonIcon className="h-4 w-4 mr-1" />
                        REJECTED
                      </div>
                    )}
                    {appointment.status === "CANCELLED" && (
                      <div className="flex items-center justify-center space-x-2 text-sm cursor-default">
                        <X className="h-4 w-4 mr-1" />
                        CANCELLED
                      </div>
                    )}
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger className="w-full" asChild>
                      <Button
                        className=" w-full bg-destructive-button text-destructive-buttonFG hover:bg-destructive-button/90"
                        size="sm"
                        variant="destructive"
                        disabled={
                          appointment.status === "PARTIAL" ||
                          appointment.status === "COMPLETED" ||
                          appointment.status === "CANCELLED" ||
                          appointment.status === "REJECTED"
                        }
                      >
                        {currentlyDeletingFile === appointment.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : userRole?.id === appointment.layerId &&
                          userRole?.is_advisor ? (
                          <X />
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
                          {userRole?.id === appointment.layerId &&
                          userRole?.is_advisor
                            ? "This will mark the Appointment as Rejected"
                            : "This will permanently cancel your appointment"}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            userRole?.id === appointment.layerId &&
                            userRole?.is_advisor
                              ? reject({ id: appointment.id })
                              : cancelAppointment({ id: appointment.id })
                          }
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
          <Clock7 className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">No Scheduled Appointments</h3>
          <p>Schedule your First Appointment with Expert Lawyers</p>
        </div>
      )}
    </main>
  );
};

export default MyAppointments;
