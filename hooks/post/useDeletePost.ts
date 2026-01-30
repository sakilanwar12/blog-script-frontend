import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { deleteAPost } from "@/lib/api/post.api";

export const useDeleteAPost = (options?: {
    onSuccess?: () => void;
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteAPost({ id }),

        onSuccess: () => {
            notifications.show({
                title: "Deleted",
                message: "Post deleted successfully",
                color: "green",
            });

            queryClient.invalidateQueries({
                queryKey: ["posts"],
            });

            options?.onSuccess?.();
        },

        onError: () => {
            notifications.show({
                title: "Delete failed",
                message: "Something went wrong",
                color: "red",
            });
        },
    });
};