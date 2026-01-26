"use client";

import { Button, Textarea, TextInput } from "@mantine/core";
import useCreateAPost from "./useCreateAPost";
import TiptapEditor from "@/components/TipTapEditor";

function CreateAPostForm() {
  const {
    formProps: { getInputProps, onSubmit },
    handleSubmit,
    isPending,
    postContent,
  } = useCreateAPost();

  return (
    <form className="space-y-4" onSubmit={onSubmit(handleSubmit)}>
      <TextInput label="Title" {...getInputProps("title")} />
      <Textarea label="Excerpt" {...getInputProps("excerpt")} />
      <TiptapEditor onChange={postContent.setContent} />
      <Button type="submit" disabled={isPending}>
        Save Post
      </Button>
    </form>
  );
}

export default CreateAPostForm;
