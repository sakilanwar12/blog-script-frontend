"use client";

import { Button, Textarea, TextInput } from "@mantine/core";
import TiptapEditor from "@/components/TipTapEditor";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { initialCreatePostValues } from "./initialFormValues";
import { createPostValidators } from "./validator";
import { TCreateAPostArgs } from "@/lib/api/post.api";
import { useCreateAPost } from "@/hooks/post/useCreateAPost";

function CreateAPostForm() {
   const [content, setContent] = useState("");

      const { getInputProps, onSubmit } = useForm<TCreateAPostArgs>({
          initialValues: initialCreatePostValues,
          validate: createPostValidators
      })
  
      const { mutate, isPending } = useCreateAPost();
  
      const handleSubmit = (values: TCreateAPostArgs) => {
          mutate({
              title: values?.title,
              status: values?.status,
              excerpt: values?.excerpt,
              content
          })
      }

  return (
    <form className="space-y-4" onSubmit={onSubmit(handleSubmit)}>
      <TextInput label="Title" {...getInputProps("title")} />
      <Textarea label="Excerpt" {...getInputProps("excerpt")} />
      <TiptapEditor onChange={setContent} />
      <Button type="submit" disabled={isPending}>
        Save Post
      </Button>
    </form>
  );
}

export default CreateAPostForm;
