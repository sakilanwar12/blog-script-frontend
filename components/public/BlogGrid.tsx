"use client";

import { SimpleGrid, Text, Skeleton } from "@mantine/core";
import { FileText } from "lucide-react";
import BlogCard from "./BlogCard";

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image: string;
  author: {
    name: string;
    avatar: string;
  };
  published_date: string;
  read_time?: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  loading?: boolean;
}

function LoadingSkeleton() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
          <Skeleton height={200} radius="md" mb="md" />
          <Skeleton height={24} radius="sm" mb="sm" />
          <Skeleton height={16} radius="sm" mb="xs" />
          <Skeleton height={16} radius="sm" mb="xs" />
          <Skeleton height={16} width="60%" radius="sm" mb="md" />
          <Skeleton height={32} width="50%" radius="sm" />
        </div>
      ))}
    </SimpleGrid>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16 px-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
      <FileText size={64} className="text-gray-400 opacity-50 mx-auto mb-6" />
      <Text size="xl" fw={600} mb="xs">
        No blog posts found
      </Text>
      <Text c="dimmed" size="sm">
        Check back later for new content or try adjusting your search.
      </Text>
    </div>
  );
}

export default function BlogGrid({ posts, loading = false }: BlogGridProps) {
  if (loading) {
    return <LoadingSkeleton />;
  }

  if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
      {posts.map((post) => (
        <BlogCard
          key={post._id}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          image={post.featured_image}
          author={post.author}
          publishedDate={post.published_date}
          readTime={post.read_time}
        />
      ))}
    </SimpleGrid>
  );
}
