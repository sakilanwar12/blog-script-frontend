import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { TCreateAPostArgs } from "@/lib/api/post.api";
import { initialCreatePostValues } from "./initialFormValues";
import { createPostValidators } from "./validator";
import { useCreateAPost } from "@/hooks/post/useCreateAPost";
import useManageSearchParams from "@/hooks/useManageSearchParams";
import { useGetAPost } from "@/hooks/post/useGetAPost";
import { useUpdateAPost } from "@/hooks/post/useUpdateAPost";

export const useCreateForm = () => {
  const { getAllParams } = useManageSearchParams<{ slug: string }>();
  const slug = getAllParams()?.slug || "";

  const formProps = useForm<TCreateAPostArgs>({
    initialValues: initialCreatePostValues,
    validate: createPostValidators,
  });
  const { post, ...getAPostApiState } = useGetAPost(slug);
  useEffect(() => {
    if (slug && post && !getAPostApiState.isPending) {
      formProps.setValues({
        title: post?.title,
        status: post?.status,
        excerpt: post?.excerpt,
        content: post?.content || "",
      });
    }
  }, [slug, post, getAPostApiState.isPending]);

  const { mutate, isPending } = useCreateAPost();
  const { mutate: updateAPostMutate, isPending: isLoading } = useUpdateAPost();
  const handleSubmit = (values: TCreateAPostArgs) => {
    if (slug) {
      updateAPostMutate({ slug, payload: values });
    } else {
      mutate(values);
    }
  };
  return {
    formProps,
    handleSubmit,
    isPending: isPending || isLoading,
    postContent: {
      content: formProps.values.content,
      setContent: (content: string) =>
        formProps.setFieldValue("content", content),
    },
  };
};
