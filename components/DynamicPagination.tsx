"use client";

import { Pagination } from "@mantine/core";
import { useEffect, useMemo } from "react";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import { TMeta } from "@/lib/api/common-api.types";

type PaginationSearchParams = {
  page: string;
  limit: string;
};

type DynamicPaginationProps = {
  meta: TMeta;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  showControls?: boolean;
  limitOptions?: number[];
  showInfo?: boolean;
  debounceMs?: number;
  disabled?: boolean;
};

function DynamicPagination({
  meta,
  onPageChange,
  siblingCount = 1,
  showControls = true,
  debounceMs = 300,
  disabled = false,
}: DynamicPaginationProps) {
  const { getParams, updateParams } =
    useManageSearchParams<PaginationSearchParams>();

  // Parse meta values safely
  const apiPage = useMemo(
    () =>
      typeof meta.page === "number" ? meta.page : parseInt(String(meta.page)),
    [meta.page],
  );

  const apiLimit = useMemo(
    () =>
      typeof meta.limit === "number"
        ? meta.limit
        : parseInt(String(meta.limit)),
    [meta.limit],
  );

  const apiTotalPages = useMemo(
    () =>
      typeof meta.totalPages === "number"
        ? meta.totalPages
        : parseInt(String(meta.totalPages)),
    [meta.totalPages],
  );

  // Get current values from URL or fallback to API values
  const pageParam = getParams("page");
  const limitParam = getParams("limit");

  const currentPage = useMemo(
    () => (pageParam ? parseInt(pageParam) : apiPage),
    [pageParam, apiPage],
  );

  const currentLimit = useMemo(
    () => (limitParam ? parseInt(limitParam) : apiLimit),
    [limitParam, apiLimit],
  );

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
    if (disabled || newPage === currentPage) return;

    updateParams(
      { page: String(newPage) },
      {
        replace: true,
        debounceMs,
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
