import { TApiResponse } from './common-api.types';
import api from "@/lib/axios";


export enum EBlogStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
}

export type TBlogStatus = `${EBlogStatus}`;

export interface ICreateAPostArgs {
    title: string;
    content: string;
    status?: TBlogStatus;
}
export interface ICreateAPostRes extends ICreateAPostArgs {
    id: string;
}
async function createAPost(payload: ICreateAPostArgs): Promise<TApiResponse<ICreateAPostRes>> {
    const { data } = await api.post("/api/v1/blog", payload);
    return data;
}

export {
    createAPost
}