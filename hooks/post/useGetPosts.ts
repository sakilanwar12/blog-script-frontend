import { getPost, TPostArgs } from "@/lib/api/post.api";
import QUERY_KEYS from "@/lib/api/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = (queryArgs?: TPostArgs) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEYS.POST.GET_POSTS(queryArgs),
    queryFn: () => getPost(queryArgs),
    retry: false,
  });

  return {
    posts: data?.data ?? [],
    meta: data?.meta,
    ...rest,
  };
};