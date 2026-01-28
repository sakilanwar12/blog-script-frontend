"use client";
import DynamicPagination from "@/components/DynamicPagination";
import { DefaultTable } from "@/components/DefaultTable";
import RenderData from "@/components/RenderData";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import {  TPost, TPostArgs } from "@/lib/api/post.api";
import { ActionIcon, Checkbox } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { ActionCellProps } from "@/lib/api/common-api.types";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationModal";
import { useDeleteAPost } from "@/hooks/post/useDeletePost";
import { useGetPosts } from "@/hooks/post/useGetPosts";

function ActionCell({ row }: ActionCellProps<TPost>) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const deletePostMutation = useDeleteAPost({
    onSuccess: () => {
      setIsConfirmed(false);
      setSelectedId(null);
    },
  });

  const handleDelete = () => {
    if (!isConfirmed || !selectedId) {
      return;
    }
    deletePostMutation.mutate(selectedId!);
  };
  return (
    <div style={{ textAlign: "right" }}>
      <ActionIcon
        variant="transparent"
        size="sm"
        className="mr-3"
        onClick={() => console.log("Edit", row.original._id)}
      >
        <SquarePen className="size-6" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="sm"
        onClick={() => {
          setIsConfirmed(true);
          setSelectedId(row.original._id);
        }}
      >
        <Trash2 className="size-6 text-red-500" />
      </ActionIcon>
      <DeleteConfirmationDialog
        opened={isConfirmed}
        onClose={() => setIsConfirmed(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
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
    cell: (row) => <span>Author</span>,
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

function PostViewTable() {
  const { getParams } = useManageSearchParams<TPostArgs>();
  const page = getParams("page") || "1";
  const limit = getParams("limit") || "10";
  const search = getParams("search") || "";
  const status = getParams("status") || "";

  // Build query args
  const queryArgs: any = useMemo(
    () => ({
      page,
      limit,
      ...(search && { search }),
      ...(status && { status }),
    }),
    [page, limit, search, status],
  );
  const {posts: getPostData, meta, ...getPostApiState} = useGetPosts(queryArgs);


  const handleRowSelection = (selectedRows: TPost[]) => {
    console.log("Selected posts:", selectedRows);
  };

  return (
    <RenderData {...getPostApiState}>
      <DefaultTable
        data={getPostData}
        columns={columns}
        enableSorting={true}
        enablePagination={true}
        enableRowSelection={true}
        onRowSelectionChange={handleRowSelection}
      />
      <DynamicPagination meta={meta} />
    </RenderData>
  );
}

export default PostViewTable;
