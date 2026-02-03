"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Text, Group, Avatar, Badge, Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";

interface FeaturedPostProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  readTime?: string;
  category?: string;
}

export default function FeaturedPost({
  slug,
  title,
  excerpt,
  image,
  author,
  publishedDate,
  readTime,
  category,
}: FeaturedPostProps) {
  return (
    <Card
      component={Link}
      href={`/blog/${slug}`}
      padding={0}
      radius="xl"
      className="border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
        <Card.Section className="relative">
          <div className="relative w-full pt-[60%] lg:pt-[100%] lg:h-full bg-gray-100 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {category && (
              <Badge className="absolute top-6 left-6 z-10" size="lg">
                {category}
              </Badge>
            )}
            <Badge
              className="absolute top-6 right-6 z-10 backdrop-blur-md"
              variant="filled"
              color="dark"
            >
              Featured
            </Badge>
          </div>
        </Card.Section>

        <div className="flex items-center p-8 lg:p-12">
          <div className="w-full flex flex-col gap-6">
            <Text
              size="xl"
              fw={700}
              className="text-3xl lg:text-4xl leading-tight"
            >
              {title}
            </Text>

            <Text
              c="dimmed"
              size="lg"
              lineClamp={4}
              className="leading-relaxed"
            >
              {excerpt}
            </Text>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <Group gap="md">
                <Avatar
                  src={author.avatar}
                  alt={author.name}
                  size={48}
                  radius="xl"
                />
                <div>
                  <Text fw={600}>{author.name}</Text>
                  <Group gap="xs">
                    <Text size="sm" c="dimmed">
                      {publishedDate}
                    </Text>
                    {readTime && (
                      <>
                        <Text size="sm" c="dimmed">
                          •
                        </Text>
                        <Text size="sm" c="dimmed">
                          {readTime}
                        </Text>
                      </>
                    )}
                  </Group>
                </div>
              </Group>

              <Button rightSection={<ArrowRight size={20} />} size="md">
                Read Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
