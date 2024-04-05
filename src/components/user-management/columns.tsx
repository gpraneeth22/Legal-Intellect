"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format, formatDistance } from "date-fns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface UsersData {
  email: string;
  first_name: string | null;
  last_name: string | null;
  joinedAt: string;
  is_admin: boolean;
  is_advisor: boolean;
  rating: number;
}

export const columns: ColumnDef<UsersData>[] = [
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
];
