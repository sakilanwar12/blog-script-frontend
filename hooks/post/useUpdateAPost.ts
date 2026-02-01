import { updateAPost } from "@/lib/api/post.api";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useUpdateAPost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: updateAPost,
    onSuccess: () => {
      notifications.show({
        title: "Success",
        message: "Post Updated successfully",
        color: "green",
      });

      // Invalidate posts queries so the posts list refreshes
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.replace("/admin/post/view");
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Error",
        message: error.message || "Something went wrong",
        color: "red",
      });
    },
  });
  return { mutate, isPending };
};
