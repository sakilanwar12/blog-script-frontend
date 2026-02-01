"use client";

import { Button, Textarea, TextInput } from "@mantine/core";
import TiptapEditor from "@/components/TipTapEditor";
import { useCreateForm } from "./useCreateForm";

function CreateAPostForm() {
  const { formProps, handleSubmit, isPending, postContent } = useCreateForm();

  return (
    <form className="space-y-4" onSubmit={formProps.onSubmit(handleSubmit)}>
      <TextInput label="Title" {...formProps.getInputProps("title")} />
      <Textarea label="Excerpt" {...formProps.getInputProps("excerpt")} />
      <TiptapEditor onChange={postContent.setContent} />
      <Button type="submit" disabled={isPending}>
        Save Post
      </Button>
    </form>
  );
}

export default CreateAPostForm;
