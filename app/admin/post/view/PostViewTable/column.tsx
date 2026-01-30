import { TPost } from "@/lib/api/post.api";
import { Checkbox } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import ActionCell from "./ActionCell";

const columns: ColumnDef<TPost>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    size: 40,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: (info) => <p>{info.getValue() as string}</p>,
  },
  {
    accessorKey: "excerpt",
    header: "Excerpt",
    cell: (info) => info.getValue(),
  },
  {
    id: "author",
    header: "Author",
    cell: ({ row: { original } }) => <span>{original?.author?.name}</span>,
  },
  {
    id: "category",
    header: "Excerpt",
    cell: () => "Blog",
  },
  {
    id: "date",
    header: "Date",
    cell: () => "last modified",
  },
  {
    id: "actions",
    header: "Action",
    cell: ActionCell,
  },
];

export default columns;
