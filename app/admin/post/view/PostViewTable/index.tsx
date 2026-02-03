"use client";
import DynamicPagination from "@/components/DynamicPagination";
import DefaultTable from "@/components/DefaultTable";
import RenderData from "@/components/RenderData";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import { TPost, TPostArgs } from "@/lib/api/post.api";
import { useGetPosts } from "@/hooks/post/useGetPosts";
import columns from "./column";
import BulkActions from "./BulkActions";
import { useState, useCallback } from "react";
import PostFilterButtons from "./PostFilterButtons";

function PostViewTable() {
  const { getAllParams } = useManageSearchParams<TPostArgs>();
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const queryObject = getAllParams();

  const {
    posts: getPostData,
    meta,
    ...getPostApiState
  } = useGetPosts({ ...queryObject });

  const handleRowSelection = useCallback((selectedRows: TPost[]) => {
    setSelectedId(selectedRows.map((row) => row._id));
  }, []);

  return (
    <div className="space-y-4">
      <PostFilterButtons />
      <RenderData {...getPostApiState}>
        <DefaultTable
          data={getPostData}
          columns={columns}
          enableSorting={true}
          enablePagination={true}
          enableRowSelection={true}
          onRowSelectionChange={handleRowSelection}
        />
        <div className="flex justify-between items-center py-4">
          <BulkActions selectedId={selectedId} />
          {meta && <DynamicPagination meta={meta} />}
          <div></div>
        </div>
      </RenderData>
    </div>
  );
}

export default PostViewTable;
