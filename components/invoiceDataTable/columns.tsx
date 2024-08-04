"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "../common/CellAction";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

const formatDate = (isoString: any) => {
  const date = new Date(isoString);
  const options: any = { day: "numeric", month: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-IN", options);
};

export const invoiceColumns: ColumnDef<any>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-translate-x-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="h-4 w-4 translate-x-2"/>
        </Button>
      );
    },
    cell: ({ row }) => <div>{formatDate(row.original.date)}</div>,
  },
  {
    accessorKey: "invoice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-translate-x-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice no
          <ArrowUpDown className="h-4 w-4 translate-x-2"/>
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.original.invoice}</div>,
  },
  {
    accessorKey: "taxable",
    header: "Taxable amt",
  },
  {
    accessorKey: "gross",
    header: "Gross total",
  },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => <CellAction data={row.original} />
  //   },
];
