import { getAPost } from "@/lib/api/post.api";
import { useQuery } from "@tanstack/react-query";

export const useGetAPost = (slug: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getAPost(slug),
    retry: false,
  });

  return {
    post: data?.data,
    ...rest,
  };
};
