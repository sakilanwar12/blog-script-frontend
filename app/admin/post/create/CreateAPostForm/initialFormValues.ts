import { TCreateAPostArgs } from "@/lib/api/post.api";

export const initialCreatePostValues: TCreateAPostArgs = {
    title: "",
    excerpt:"",
    content: "",
    status: "draft"
}