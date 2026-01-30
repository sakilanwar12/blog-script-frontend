"use client";
import DynamicPagination from "@/components/DynamicPagination";
import  DefaultTable  from "@/components/DefaultTable";
import RenderData from "@/components/RenderData";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import {  TPost, TPostArgs } from "@/lib/api/post.api";
import { useMemo } from "react";
import { useGetPosts } from "@/hooks/post/useGetPosts";
import columns from "./column";


function PostViewTable() {
  const { getParams } = useManageSearchParams<TPostArgs>();
  const page = getParams("page") || "1";
  const limit = getParams("limit") || "10";
  const search = getParams("search") || "";
  const status = getParams("status") || "";

  // Build query args
  const queryArgs: TPostArgs = useMemo(
    () => ({
      page,
      limit,
      ...(search && { search }),
      ...(status && { status }),
    }),
    [page, limit, search, status],
  );
  const {posts: getPostData, meta, ...getPostApiState} = useGetPosts(queryArgs);


  const handleRowSelection = (selectedRows: TPost[]) => {
    console.log("Selected posts:", selectedRows);
  };

  return (
    <RenderData {...getPostApiState}>
      <DefaultTable
        data={getPostData}
        columns={columns}
        enableSorting={true}
        enablePagination={true}
        enableRowSelection={true}
        onRowSelectionChange={handleRowSelection}
      />
      {meta && <DynamicPagination meta={meta} />}
    </RenderData>
  );
}

export default PostViewTable;
