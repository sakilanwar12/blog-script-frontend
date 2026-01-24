"use client";

import { Button, Textarea, TextInput } from "@mantine/core";
import useCreateAPost from "./useCreateAPost";

function CreateAPostForm() {
  const {
    formProps: { getInputProps, onSubmit },
    handleSubmit,
    isPending,
  } = useCreateAPost();

  return (
    <form className="space-y-4" onSubmit={onSubmit(handleSubmit)}>
      <TextInput label="Title" {...getInputProps("title")} />
      <Textarea label="Content" {...getInputProps("content")} />
      <Button type="submit" disabled={isPending}>
        Save Post
      </Button>
    </form>
  );
}

export default CreateAPostForm;
