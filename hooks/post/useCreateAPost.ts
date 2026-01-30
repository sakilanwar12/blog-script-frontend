import { createAPost } from "@/lib/api/post.api";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateAPost = ()=>{
     const queryClient = useQueryClient();
     const router = useRouter();

    const { mutate, isPending } = useMutation({
        mutationFn: createAPost,
        onSuccess: () => {
            notifications.show({
                title: "Success",
                message: "Post Created successfully",
                color: "green",
            });

            // Invalidate posts queries so the posts list refreshes
            queryClient.invalidateQueries({ queryKey: ["posts"] });

            router.push("/admin/post/view");
        },
        onError: (error: Error) => {
            notifications.show({
                title: "Error",
                message: error.message || "Invalid credentials",
                color: "red",
            });
        },
    });
    return { mutate, isPending };

}