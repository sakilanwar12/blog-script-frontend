import { TApiResponse, TString } from './common-api.types';
import api from "@/lib/axios";


export enum EBlogStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
}

export type TBlogStatus = `${EBlogStatus}`;

/*
=====================================================================
Create A Post Start
=====================================================================
*/
export type TCreateAPostArgs = {
    title: string;
    content: string;
    status?: TBlogStatus;
}
type ICreateAPostRes = TCreateAPostArgs & {
    id: string;
}
async function createAPost(payload: TCreateAPostArgs): Promise<TApiResponse<ICreateAPostRes>> {
    const { data } = await api.post("/api/v1/blog", payload);
    return data;
}

/*
=====================================================================
Create A Post End
=====================================================================
*/

/*
=====================================================================
Get A Post Start
=====================================================================
*/

export type TPost = ICreateAPostRes & {
    createdAt: TString;
    updatedAt: TString;
}
async function getPost(): Promise<TApiResponse<TPost[]>> {
    const { data } = await api.get("/api/v1/blog");
    return data;
}

/*
=====================================================================
Get A Post End
=====================================================================
*/

export {
    createAPost,
    getPost
}