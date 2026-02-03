"use client";

import { Container, Title, Text } from "@mantine/core";

export default function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50 border-b border-gray-200">
      <Container size="md">
        <div className="text-center">
          <Title
            order={1}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              TechBlog
            </span>
          </Title>
          <Text
            size="lg"
            c="dimmed"
            className="leading-relaxed max-w-2xl mx-auto"
          >
            Exploring the latest in web development, design, and technology.
            Join our community of developers and designers sharing knowledge and
            building the future of the web.
          </Text>
        </div>
      </Container>
    </section>
  );
}
