"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Badge, Text } from "@mantine/core";

interface HeroPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

interface HeroSectionProps {
  mainPost?: HeroPost;
  sidePosts?: HeroPost[];
}

const defaultMainPost: HeroPost = {
  slug: "postea-senserit-id-eos",
  title: "Postea senserit id eos, vivendo periculis ei qui",
  category: "LIFESTYLE",
  author: "JOHN DOE",
  date: "20 APRIL 2018",
  image: "/images/blog-placeholder.png",
};

const defaultSidePosts: HeroPost[] = [
  {
    slug: "sed-ut-perspiciatis",
    title: "Sed ut perspiciatis, unde omnis iste natus error sit",
    category: "LIFESTYLE",
    author: "JOHN DOE",
    date: "20 APRIL 2018",
    image: "/images/blog-placeholder.png",
  },
  {
    slug: "mel-ut-impetus-suscipit",
    title:
      "Mel ut impetus suscipit tincidunt, cum id ullum laboramus persequeris.",
    category: "LIFESTYLE",
    author: "JOHN DOE",
    date: "20 APRIL 2018",
    image: "/images/blog-placeholder.png",
  },
];

export default function HeroSection({
  mainPost = defaultMainPost,
  sidePosts = defaultSidePosts,
}: HeroSectionProps) {
  return (
    <section className="py-8">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Large Post */}
          <Link
            href={`/blog/${mainPost.slug}`}
            className="lg:col-span-2 relative group overflow-hidden rounded-sm h-[400px] lg:h-[500px] block"
          >
            <Image
              src={mainPost.image}
              alt={mainPost.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge color="red" size="sm" className="mb-3">
                {mainPost.category}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                {mainPost.title}
              </h2>
              <div className="flex items-center gap-2 text-sm">
                <Text c="white" size="xs" fw={600}>
                  {mainPost.author}
                </Text>
                <span className="text-white/60">•</span>
                <Text c="dimmed" size="xs" className="text-white/80">
                  {mainPost.date}
                </Text>
              </div>
            </div>
          </Link>

          {/* Side Posts */}
          <div className="flex flex-col gap-4">
            {sidePosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="relative group overflow-hidden rounded-sm h-[240px] block"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge color="red" size="xs" className="mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <Text c="white" size="xs" fw={600}>
                      {post.author}
                    </Text>
                    <span className="text-white/60">•</span>
                    <Text c="dimmed" size="xs" className="text-white/80">
                      {post.date}
                    </Text>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
