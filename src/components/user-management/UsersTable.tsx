"use client";
import { trpc } from "@/app/_trpc/client";
import { UserDataTable } from "./userDataTable";
import UnAuthorized from "@/app/un-authorized";
import { Loader2, MoreHorizontal, Save } from "lucide-react";
import { Button } from "../ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistance } from "date-fns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";

export interface UsersData {
  email: string;
  first_name: string | null;
  last_name: string | null;
  joinedAt: string;
  is_admin: boolean;
  is_advisor: boolean;
  rating: number;
}

const UsersTable = () => {
  const utils = trpc.useUtils();
  const router = useRouter();
  const {
    data: usersData,
    isLoading,
    error,
    isError,
  } = trpc.admin.getAllUsers.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  const handleTryAgain = () => {
    utils.admin.getAllUsers.invalidate();
  };

  if (isError) {
    if (error?.data?.code == "FORBIDDEN") {
      return <UnAuthorized />;
    } else {
      return (
        <div className=" my-80 flex flex-col justify-center items-center space-y-2">
          <h2 className=" text-2xl">Something went wrong!</h2>
          <Button onClick={handleTryAgain}>Try Again</Button>
        </div>
      );
    }
  }

  const { mutate: changeUserRole } = trpc.admin.updateUserRole.useMutation({
    onSuccess: () => {
      utils.admin.getAllUsers.invalidate();
      toast.success("User Role Updated Successfully");
    },
    onError: (error) => {
      if (error.data?.code === "FORBIDDEN") {
        toast.error("Access Denied", {
          description: "If you're an Admin, please login again!",
          action: {
            label: "Login",
            onClick: () => router.push("/api/auth/login"),
          },
        });
      }
    },
  });

  const columns: ColumnDef<UsersData>[] = [
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "first_name",
      header: "First Name",
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "joinedAt",
      header: "Member since",
      cell: ({ row }) => {
        const date = formatDistance(
          new Date(row.getValue("joinedAt")),
          new Date()
        );
        return date;
      },
    },
    {
      accessorKey: "is_admin",
      header: "Is Admin",
    },
    {
      accessorKey: "is_advisor",
      header: "Is Legal Advisor",
    },
    {
      accessorKey: "rating",
      header: "Rating",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Change Role</DropdownMenuLabel>
              {row.getValue("is_advisor") ? (
                <DropdownMenuItem
                  onClick={() => {
                    changeUserRole({
                      email: row.getValue("email"),
                      is_admin: row.getValue("is_admin"),
                      is_advisor: false,
                    });
                  }}
                >
                  Remove as Advisor
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => {
                    changeUserRole({
                      email: row.getValue("email"),
                      is_admin: row.getValue("is_admin"),
                      is_advisor: true,
                    });
                  }}
                >
                  Advisor
                </DropdownMenuItem>
              )}
              {row.getValue("is_admin") ? (
                <DropdownMenuItem
                  onClick={() => {
                    changeUserRole({
                      email: row.getValue("email"),
                      is_admin: false,
                      is_advisor: row.getValue("is_advisor"),
                    });
                  }}
                >
                  Remove as Admin
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => {
                    changeUserRole({
                      email: row.getValue("email"),
                      is_admin: true,
                      is_advisor: row.getValue("is_advisor"),
                    });
                  }}
                >
                  Admin
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className=" container">
      {isLoading ? (
        <Loader2 className=" items-center mx-auto my-80 animate-spin h-8 w-8" />
      ) : (
        <div className=" container mt-10">
          <section className="w-full">
            <h1 className="text-6xl mb-10 font-semibold text-purple-800">
              User Management Table
            </h1>
          </section>
          <UserDataTable columns={columns} data={usersData!} />
        </div>
      )}
    </div>
  );
};

export default UsersTable;
