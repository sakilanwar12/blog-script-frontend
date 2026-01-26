import { useForm } from "@mantine/form"
import { initialCreatePostValues } from "./initialFormValues"
import { createAPost, TCreateAPostArgs } from "@/lib/api/post.api"
import { createPostValidators } from "./validator"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { notifications } from "@mantine/notifications"
import { useState } from "react"

const useCreateAPost = () => {
    const [content, setContent] = useState("");

    const router = useRouter();
    const formProps = useForm<TCreateAPostArgs>({
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

    const handleSubmit = (values: TCreateAPostArgs) => {
        console.log("values",values)
        mutate({
            title: values?.title,
            status: values?.status,
            excerpt: values?.excerpt,
            content
        })
    }
    return {
        formProps,
        handleSubmit,
        isPending,
        postContent: {
            content,
            setContent
        }
    }
}

export default useCreateAPost;