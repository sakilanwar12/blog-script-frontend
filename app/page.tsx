"use client";

import { Container, Title, Text } from "@mantine/core";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import HeroSection from "@/components/public/HeroSection";
import FeaturedPost from "@/components/public/FeaturedPost";
import BlogGrid from "@/components/public/BlogGrid";
import NewsletterSection from "@/components/public/NewsletterSection";

// Mock data for demonstration
const featuredPost = {
  slug: "getting-started-with-nextjs-14",
  title: "Getting Started with Next.js 14: A Comprehensive Guide",
  excerpt:
    "Explore the latest features of Next.js 14 including Server Components, improved performance, and the new App Router. Learn how to build modern web applications with the most powerful React framework.",
  image: "/images/blog-placeholder.png",
  author: {
    name: "Sarah Johnson",
    avatar: "/images/author-avatar.png",
  },
  publishedDate: "Jan 15, 2024",
  readTime: "8 min read",
  category: "Web Development",
};

const blogPosts = [
  {
    _id: "1",
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Dive deep into advanced TypeScript patterns, generics, and type manipulation techniques to write more robust and maintainable code.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "Michael Chen",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 12, 2024",
    read_time: "6 min read",
  },
  {
    _id: "2",
    slug: "building-scalable-apis-with-nodejs",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to design and implement scalable RESTful APIs using Node.js, Express, and modern best practices for backend development.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "Emily Rodriguez",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 10, 2024",
    read_time: "10 min read",
  },
  {
    _id: "3",
    slug: "css-grid-vs-flexbox-when-to-use",
    title: "CSS Grid vs Flexbox: When to Use Each Layout System",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and guidelines for choosing the right layout system.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "David Kim",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 8, 2024",
    read_time: "5 min read",
  },
  {
    _id: "4",
    slug: "react-performance-optimization-techniques",
    title: "React Performance Optimization: Essential Techniques",
    excerpt:
      "Discover proven techniques to optimize React application performance, from memoization to code splitting and lazy loading.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 5, 2024",
    read_time: "7 min read",
  },
  {
    _id: "5",
    slug: "introduction-to-web-accessibility",
    title: "Introduction to Web Accessibility: Making the Web for Everyone",
    excerpt:
      "Learn the fundamentals of web accessibility and how to build inclusive web applications that work for all users.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "Alex Thompson",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 3, 2024",
    read_time: "6 min read",
  },
  {
    _id: "6",
    slug: "modern-javascript-features-2024",
    title: "Modern JavaScript Features You Should Know in 2024",
    excerpt:
      "Stay up-to-date with the latest JavaScript features and syntax improvements that will make your code cleaner and more efficient.",
    featured_image: "/images/blog-placeholder.png",
    author: {
      name: "Michael Chen",
      avatar: "/images/author-avatar.png",
    },
    published_date: "Jan 1, 2024",
    read_time: "9 min read",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        {/* Latest Posts Section */}
        <section className="py-16">
          <Container size="xl">
            <div className="text-center mb-12">
              <Title order={2} mb="xs">
                Latest Articles
              </Title>
              <Text c="dimmed" size="lg">
                Fresh insights and tutorials from our community
              </Text>
            </div>
            <BlogGrid posts={blogPosts} />
          </Container>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}
