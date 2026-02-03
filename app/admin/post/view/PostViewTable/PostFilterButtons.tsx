import useManageSearchParams from "@/hooks/useManageSearchParams";
import { Button } from "@mantine/core";

function PostFilterButtons() {
  const { updateParams, getParams } = useManageSearchParams();
  const currentStatus = getParams("post_status");
  const options = [
    { value: "all", label: "All" },
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
    { value: "trashed", label: "Trash" },
  ];
  return (
    <div className="flex items-center gap-3">
      {options.map((option) => (
        <Button
          color={currentStatus === option.value ? "blue" : "gray"}
          variant="outline"
          size="xs"
          key={option.value}
          onClick={() => updateParams({ post_status: option.value })}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default PostFilterButtons;
