"use client";
import DynamicPagination from "@/components/DynamicPagination";
import DefaultTable from "@/components/DefaultTable";
import RenderData from "@/components/RenderData";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import { TPost, TPostArgs } from "@/lib/api/post.api";
import { useGetPosts } from "@/hooks/post/useGetPosts";
import columns from "./column";

function PostViewTable() {
  const { getAllParams } = useManageSearchParams<TPostArgs>();

  const queryObject = getAllParams();

  const {
    posts: getPostData,
    meta,
    ...getPostApiState
  } = useGetPosts({ ...queryObject });

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
