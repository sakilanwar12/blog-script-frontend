import { useDeleteAPost } from "@/hooks/post/useDeletePost";
import { Button, Select } from "@mantine/core";
import { useState } from "react";

interface BulkActionsProps {
  selectedId: string[];
}

function BulkActions({ selectedId }: BulkActionsProps) {
  const [value, setValue] = useState<string | null>(null);

  // Initialize mutation hook
  const deletePostMutation = useDeleteAPost();

  const handleApply = () => {
    if (!value || selectedId.length === 0) return;

    switch (value) {
      case "delete":
        deletePostMutation.mutate(selectedId, {
          onSuccess: () => {
            console.log("Posts deleted successfully");
            setValue(null); // reset dropdown
          },
          onError: (err) => {
            console.error("Error deleting posts:", err);
          },
        });
        break;

      case "trash":
        // If you have a separate trash API call, use it here
        console.log("Move to trash:", selectedId);
        // Example: trashPostMutation.mutate(selectedId)
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
        className="w-36"
        data={[
          { value: "trash", label: "Trash" },
          { value: "delete", label: "Delete" },
        ]}
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


// import { Button, Select } from "@mantine/core";
// import { useState } from "react";
// function BulkActions({ selectedId }: { selectedId: string[] }) {
//   const [value, setValue] = useState<string | null>(null);

//   return (
//     <div className="flex items-center gap-2">
//       <Select
//         label=""
//         placeholder="Select an action"
//         value={value}
//         onChange={setValue}
//         className="w-36"
//         data={[
//           { value: "trash", label: "Trash" },
//           { value: "delete", label: "Delete" },
//         ]}
//       />
//       <Button>Apply</Button>
//     </div>
//   );
// }

// export default BulkActions;
