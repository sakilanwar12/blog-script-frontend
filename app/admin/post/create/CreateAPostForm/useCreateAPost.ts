import { useForm } from "@mantine/form"
import { initialCreatePostValues } from "./initialFormValues"
import { createAPost, ICreateAPostArgs } from "@/lib/api/post.api"
import { createPostValidators } from "./validator"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { notifications } from "@mantine/notifications"

const useCreateAPost = () => {
    const router = useRouter();
    const formProps = useForm<ICreateAPostArgs>({
        initialValues: initialCreatePostValues,
        validate: createPostValidators
    })
    const { mutate, isPending } = useMutation({
        mutationFn: createAPost,
        onSuccess: () => {
            notifications.show({
                title: "Success",
                message: "Post Created successfully",
                color: "green",
            });
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

    const handleSubmit = (values: ICreateAPostArgs) => {
        mutate(values)
    }
    return {
        formProps,
        handleSubmit,
        isPending
    }
}

export default useCreateAPost;