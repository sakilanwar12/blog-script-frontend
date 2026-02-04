"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Group,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.trim().length < 3
          ? "Subject must be at least 3 characters"
          : null,
      message: (value) =>
        value.trim().length < 10
          ? "Message must be at least 10 characters"
          : null,
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the form data to your backend
      console.log("Form submitted:", values);

      notifications.show({
        title: "Success!",
        message:
          "Your message has been sent successfully. We'll get back to you soon!",
        color: "green",
      });

      form.reset();
    } catch {
      notifications.show({
        title: "Error",
        message: "Failed to send message. Please try again later.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <Container size="md" py={60}>
        {/* Page Header */}
        <Stack gap="md" mb={50} ta="center">
          <Title order={1} size="h1" fw={700} className="text-gray-900">
            Contact
          </Title>
          <Text
            size="lg"
            c="dimmed"
            maw={600}
            mx="auto"
            className="text-gray-600"
          >
            Have a question or want to work together? We&apos;d love to hear
            from you. Send us a message and we&apos;ll respond as soon as
            possible.
          </Text>
        </Stack>

        {/* Contact Form */}
        <Paper
          shadow="sm"
          p={40}
          radius="md"
          className="border border-gray-200"
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="lg">
              {/* Name and Email Row */}
              <Group grow align="flex-start">
                <TextInput
                  label="Your name"
                  placeholder="Enter your name"
                  size="md"
                  leftSection={<User size={18} className="text-gray-400" />}
                  {...form.getInputProps("name")}
                  classNames={{
                    label: "text-gray-700 font-medium mb-2",
                    input: "border-gray-300 focus:border-pink-500",
                  }}
                />
                <TextInput
                  label="Your email"
                  placeholder="Enter your email"
                  size="md"
                  leftSection={<Mail size={18} className="text-gray-400" />}
                  {...form.getInputProps("email")}
                  classNames={{
                    label: "text-gray-700 font-medium mb-2",
                    input: "border-gray-300 focus:border-pink-500",
                  }}
                />
              </Group>

              {/* Subject */}
              <TextInput
                label="Subject"
                placeholder="Enter subject"
                size="md"
                leftSection={
                  <MessageSquare size={18} className="text-gray-400" />
                }
                {...form.getInputProps("subject")}
                classNames={{
                  label: "text-gray-700 font-medium mb-2",
                  input: "border-gray-300 focus:border-pink-500",
                }}
              />

              {/* Message */}
              <Textarea
                label="Your message (optional)"
                placeholder="Write your message here..."
                size="md"
                minRows={6}
                maxRows={10}
                {...form.getInputProps("message")}
                classNames={{
                  label: "text-gray-700 font-medium mb-2",
                  input: "border-gray-300 focus:border-pink-500",
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                loading={loading}
                leftSection={<Send size={18} />}
                className="bg-pink-600 hover:bg-pink-700"
                styles={{
                  root: {
                    width: "fit-content",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Additional Contact Information */}
        <Stack gap="md" mt={50} ta="center">
          <Text size="sm" c="dimmed" className="text-gray-600">
            You can also reach us at{" "}
            <a
              href="mailto:contact@example.com"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              contact@example.com
            </a>
          </Text>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
