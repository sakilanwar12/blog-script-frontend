import { FormValidators } from "@/lib/api/common-api.types"
import { ICreateAPostArgs } from "@/lib/api/post.api"

export const createPostValidators: FormValidators<ICreateAPostArgs> = {
    title: (value) => {
        if (!value?.trim()) {
            return "Title is required"
        }

        return null
    },
    content: (value) => {
        if (!value?.trim()) {
            return "Content is required"
        }
        return null
    },
}