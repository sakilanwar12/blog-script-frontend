import { FormValidators } from "@/lib/api/common-api.types"
import { TCreateAPostArgs } from "@/lib/api/post.api"

export const createPostValidators: FormValidators<TCreateAPostArgs> = {
    title: (value) => {
        if (!value?.trim()) {
            return "Title is required"
        }

        return null;
    },
    excerpt: (value) => {
        if (!value?.trim()) {
            return "Excerpt is required"
        }

        return null;
    },
}