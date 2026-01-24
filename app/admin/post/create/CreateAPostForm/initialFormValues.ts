import { ICreateAPostArgs } from "@/lib/api/post.api";

export const initialCreatePostValues: ICreateAPostArgs = {
    title: "",
    content: "",
    status: "draft"
}