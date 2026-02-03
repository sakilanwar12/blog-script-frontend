import { useDeleteAPost } from "@/hooks/post/useDeletePost";
import { Button, Select } from "@mantine/core";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
interface BulkActionsProps {
  selectedId: string[];
}
const actionData = [
  { value: "trash", label: "Move to Trash" },
  { value: "edit", label: "Edit" },
];
function BulkActions({ selectedId }: BulkActionsProps) {
  const [value, setValue] = useState<string | null>(null);

  // Initialize mutation hook
  const deletePostMutation = useDeleteAPost();

  const handleApply = () => {
    if (!value || selectedId.length === 0) return;

    switch (value) {
      case "edit":
        console.log("edit");
        break;

      case "trash":
        deletePostMutation.mutate(selectedId, {
          onSuccess: () => {
            notifications.show({
              title: "Success",
              message: "Posts moved to trash successfully",
              color: "green",
            });
            setValue(null);
          },
          onError: (err) => {
            notifications.show({
              title: "Error",
              message: err.message || "Error moving posts to trash",
              color: "red",
            });
          },
        });
        setValue(null);
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        label=""
        placeholder="Select an action"
        value={value}
        onChange={setValue}
        className="w-40"
        data={actionData}
      />
      <Button
        onClick={handleApply}
        disabled={selectedId.length === 0 || !value}
        loading={deletePostMutation.isPending}
      >
        Apply
      </Button>
    </div>
  );
}

export default BulkActions;
