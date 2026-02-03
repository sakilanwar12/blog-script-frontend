"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Text, Group, Avatar } from "@mantine/core";

interface BlogCardProps {
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
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  author,
  publishedDate,
  readTime,
}: BlogCardProps) {
  return (
    <Card
      component={Link}
      href={`/blog/${slug}`}
      padding="lg"
      radius="lg"
      className="h-full flex flex-col border border-gray-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-pointer"
    >
      <Card.Section className="relative w-full pt-[56.25%] bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Card.Section>

      <div className="flex flex-col gap-4 flex-1">
        <Text fw={600} size="xl" lineClamp={2} className="leading-tight">
          {title}
        </Text>

        <Text
          c="dimmed"
          size="sm"
          lineClamp={3}
          className="leading-relaxed flex-1"
        >
          {excerpt}
        </Text>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-4 border-t border-gray-200">
          <Group gap="sm">
            <Avatar
              src={author.avatar}
              alt={author.name}
              size={32}
              radius="xl"
            />
            <Text size="sm" fw={500}>
              {author.name}
            </Text>
          </Group>

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
      </div>
    </Card>
  );
}
