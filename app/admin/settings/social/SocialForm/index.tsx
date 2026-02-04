"use client";

import { useState } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";

function SocialForm() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    youtube: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (key: string, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Social Links:", socialLinks);
    // You can send data to your API here
  };

  return (
    <Box maw={400} mt="md">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Facebook URL"
          placeholder="https://facebook.com/yourpage"
          value={socialLinks.facebook}
          onChange={(e) => handleChange("facebook", e.currentTarget.value)}
          mb="sm"
        />
        <TextInput
          label="YouTube URL"
          placeholder="https://youtube.com/yourchannel"
          value={socialLinks.youtube}
          onChange={(e) => handleChange("youtube", e.currentTarget.value)}
          mb="sm"
        />
        <TextInput
          label="LinkedIn URL"
          placeholder="https://linkedin.com/in/yourprofile"
          value={socialLinks.linkedin}
          onChange={(e) => handleChange("linkedin", e.currentTarget.value)}
          mb="sm"
        />
        <TextInput
          label="Twitter URL"
          placeholder="https://twitter.com/yourhandle"
          value={socialLinks.twitter}
          onChange={(e) => handleChange("twitter", e.currentTarget.value)}
          mb="sm"
        />

        <Group  mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Box>
  );
}

export default SocialForm;
