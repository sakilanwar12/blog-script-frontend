"use client";

import { Container, Title, Text, TextInput, Button } from "@mantine/core";

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="py-16">
      <Container size="xl">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto mb-8">
            <Title order={2} className="text-white mb-4">
              Stay Updated
            </Title>
            <Text size="lg" className="opacity-90 leading-relaxed">
              Get the latest articles and insights delivered directly to your
              inbox. Join thousands of developers already subscribed.
            </Text>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <TextInput
              type="email"
              placeholder="Enter your email"
              size="md"
              required
              className="flex-1"
              classNames={{
                input:
                  "bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white",
              }}
            />
            <Button
              type="submit"
              size="md"
              color="white"
              c="blue"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
