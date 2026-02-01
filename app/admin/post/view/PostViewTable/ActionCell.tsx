
import {  TPost } from "@/lib/api/post.api";
import { ActionIcon } from "@mantine/core";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { ActionCellProps } from "@/lib/api/common-api.types";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationModal";
import { useDeleteAPost } from "@/hooks/post/useDeletePost";
import { useRouter } from "next/navigation";
function ActionCell({ row }: ActionCellProps<TPost>) {
  const router = useRouter();
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
    deletePostMutation.mutate([selectedId]);
  };
  return (
    <div>
      <ActionIcon
        variant="transparent"
        size="sm"
        className="mr-3"
        onClick={() => router.push(`/admin/post/create?slug=${row.original?.slug}`)}
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
        title="Are you sure you want to delete this post?"
        message="If you delete this post, it will be permanently deleted and cannot be recovered."
        confirmText="Delete"
        cancelText="Cancel"
        loading={deletePostMutation.isPending}
      />
    </div>
  );
}
export default  ActionCell;