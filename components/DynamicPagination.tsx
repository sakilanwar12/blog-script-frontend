"use client";

import { Pagination } from "@mantine/core";
import { useEffect } from "react";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import { TMeta } from "@/lib/api/common-api.types";
import { convertToNumber } from "js-utility-method";
type PaginationSearchParams = {
  page: string;
  limit: string;
};

type DynamicPaginationProps = {
  meta: TMeta;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  showControls?: boolean;
  disabled?: boolean;
};

function DynamicPagination({
  meta,
  onPageChange,
  siblingCount = 1,
  showControls = true,
  disabled = false,
}: DynamicPaginationProps) {
  const { getParams, updateParams } =
    useManageSearchParams<PaginationSearchParams>();

  const apiPage = convertToNumber({ value: meta.page, fallback: 1 });
  const apiLimit = convertToNumber({ value: meta.limit, fallback: 10 });
  const apiTotalPages = convertToNumber({
    value: meta.totalPages,
    fallback: 1,
  });

  // Read params
  const pageParam = getParams("page");
  const limitParam = getParams("limit");

  // Resolve current state
  const currentPage = convertToNumber({ value: pageParam, fallback: apiPage });
  const currentLimit =  convertToNumber({ value: limitParam, fallback: apiLimit });

  // Initialize URL params if they don't exist
  useEffect(() => {
    if (!pageParam || !limitParam) {
      updateParams(
        {
          page: String(currentPage),
          limit: String(currentLimit),
        },
        { replace: true },
      );
    }
  }, [pageParam, limitParam, currentPage, currentLimit, updateParams]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (disabled || newPage === currentPage) {
      return;
    }

    updateParams(
      { page: String(newPage) },
      {
        replace: true,
      },
    );

    onPageChange?.(newPage);
  };

  return (
    <div className="flex justify-center gap-4 py-4">
      <Pagination
        total={apiTotalPages}
        value={currentPage}
        onChange={handlePageChange}
        siblings={siblingCount}
        withControls={showControls}
        disabled={disabled}
      />
    </div>
  );
}

export default DynamicPagination;
