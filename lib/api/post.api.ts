import { generateQueryString } from '../query-string';
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
    excerpt: string;
    status?: TBlogStatus;
}
type ICreateAPostRes = TCreateAPostArgs & {
    _id: string;
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
/* ============================================================================================*/
/*
=====================================================================
Get A Post Start
=====================================================================
*/
export type TPostAuthor = {
    _id: TString;
    name: TString;
    email: TString;
}

export type TPost = ICreateAPostRes & {
    createdAt: TString;
    updatedAt: TString;
    author: TPostAuthor;
    slug: TString;
}
export type TPostArgs = {
    page?: string;
    limit?: string;
    search?: string;
    status?: string
};
// get all post
async function getPost(args?: TPostArgs): Promise<TApiResponse<TPost[]>> {
    const queryString = generateQueryString(args);
    const { data } = await api.get(`/api/v1/blog${queryString}`);
    return data;
}

// get single post
async function getAPost(slug:string): Promise<TApiResponse<TPost>> {
    const { data } = await api.get(`/api/v1/blog/${slug}`);
    return data;
}

/*
=====================================================================
Get A Post End
=====================================================================
*/
/* ============================================================================================*/
/*
=====================================================================
Delete A Post Start
=====================================================================
*/

export type TDeleteAPostArg = {
    ids: string[]
}
async function deleteAPost({ ids }: TDeleteAPostArg): Promise<TApiResponse<TPost>> {

    const { data } = await api.delete(`/api/v1/blog`, { data: { ids } });
    return data;
}

/*
=====================================================================
Delete A Post End
=====================================================================
*/
/* ============================================================================================*/
/*
=====================================================================
Update A Post Start
=====================================================================
*/

export type TUpdateAPostArg = {
    slug: string,
    payload: TCreateAPostArgs
}
async function updateAPost({ slug ,payload}: TUpdateAPostArg): Promise<TApiResponse<TPost>> {

    const { data } = await api.patch(`/api/v1/blog/${slug}`,payload);
    return data;
}

/*
=====================================================================
Update A Post End
=====================================================================
*/
/* ============================================================================================*/
export {
    createAPost,
    getPost,
    deleteAPost,
    getAPost,
    updateAPost
}