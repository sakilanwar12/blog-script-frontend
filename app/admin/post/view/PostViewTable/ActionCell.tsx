
import {  TPost } from "@/lib/api/post.api";
import { ActionIcon } from "@mantine/core";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { ActionCellProps } from "@/lib/api/common-api.types";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationModal";
import { useDeleteAPost } from "@/hooks/post/useDeletePost";
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
    <div>
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
export default  ActionCell;