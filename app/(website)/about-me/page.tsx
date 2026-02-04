"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Group,
  Badge,
  Divider,
  SimpleGrid,
} from "@mantine/core";
import { BookOpen, Coffee, Heart, MapPin, Pen, Users } from "lucide-react";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

const stats = [
  { icon: Pen, label: "Articles Written", value: "500+" },
  { icon: Users, label: "Monthly Readers", value: "50K+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  { icon: Heart, label: "Years Blogging", value: "5+" },
];

const interests = [
  "Lifestyle",
  "Travel",
  "Photography",
  "Writing",
  "Technology",
  "Fashion",
  "Food",
  "Health",
];

export default function AboutMePage() {
  return (
    <>
      <Header />

      <div className="bg-linear-to-b from-gray-50 to-white">
        <Container size="md" py={60}>
          {/* Page Header */}
          <Stack gap="xs" mb={40} ta="center">
            <Text
              size="sm"
              fw={600}
              c="pink"
              className="uppercase tracking-widest text-pink-600"
            >
              About Me
            </Text>
            <Title
              order={1}
              size={48}
              fw={700}
              className="text-gray-900"
              style={{ lineHeight: 1.2 }}
            >
              Hi, I&apos;m Sakil
            </Title>
          </Stack>

          {/* Hero Section with Image */}
          <Paper
            shadow="md"
            radius="lg"
            className="overflow-hidden mb-12 border border-gray-200"
          >
            <div className="relative h-96 w-full">
              <Image
                src="/about_profile.png"
                alt="About Me - Sakil"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Group gap="md" mb="sm">
                  <Badge
                    size="lg"
                    variant="filled"
                    className="bg-pink-600"
                    leftSection={<MapPin size={14} />}
                  >
                    Based in Dhaka, Bangladesh
                  </Badge>
                  <Badge
                    size="lg"
                    variant="filled"
                    className="bg-gray-900/80"
                    leftSection={<BookOpen size={14} />}
                  >
                    Lifestyle Blogger
                  </Badge>
                </Group>
                <Text size="lg" className="text-gray-100">
                  Passionate storyteller sharing experiences about life, travel,
                  and everything in between
                </Text>
              </div>
            </div>
          </Paper>

          {/* Introduction with Drop Cap */}
          <Paper p={40} radius="md" className="border border-gray-200 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <span className="float-left text-7xl font-bold leading-none mr-3 mt-1 text-pink-600">
                  M
                </span>
                <span className="text-gray-900">
                  y journey as a blogger began over five years ago, and it has
                  been a matter of wonder how the stories we tell have the power
                  to connect, inspire, and transform. What started as a simple
                  hobby has evolved into a passionate pursuit of sharing
                  authentic experiences and meaningful insights with a growing
                  community of readers.
                </span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through this platform, I explore the beautiful intersection of
                lifestyle, travel, and personal growth. Each article is crafted
                with care, drawing from real experiences and genuine moments
                that have shaped my perspective on life. I believe in the power
                of storytelling to create connections and spark conversations
                that matter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I&apos;m not writing, you&apos;ll find me exploring new
                places, experimenting with photography, or enjoying a good cup
                of coffee while planning my next adventure. This blog is more
                than just a collection of posts—it&apos;s a reflection of my
                journey, my passions, and my commitment to sharing stories that
                resonate.
              </p>
            </div>
          </Paper>

          {/* Quote Section */}
          <Paper
            p={50}
            radius="md"
            className="bg-linear-to-br from-pink-50 to-purple-50 border border-pink-100 mb-12"
          >
            <Stack gap="md" ta="center">
              <div className="text-pink-600 text-6xl font-serif">&ldquo;</div>
              <Text
                size="xl"
                fw={500}
                className="text-gray-800 italic max-w-2xl mx-auto"
                style={{ lineHeight: 1.6 }}
              >
                Many think that in some way they are able to generate an intense
                heat in a chamber of practically absolute non-conductivity.
              </Text>
              <Divider
                size="sm"
                className="w-16 mx-auto"
                color="pink"
                style={{ borderTopWidth: 2 }}
              />
              <Text
                size="sm"
                fw={600}
                c="dimmed"
                className="uppercase tracking-wider"
              >
                — H. G. Wells
              </Text>
            </Stack>
          </Paper>

          {/* Stats Section */}
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb={12}>
            {stats.map((stat) => (
              <Paper
                key={stat.label}
                p="xl"
                radius="md"
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Stack gap="sm" align="center" ta="center">
                  <div className="p-3 bg-pink-50 rounded-full">
                    <stat.icon size={24} className="text-pink-600" />
                  </div>
                  <Text size="xl" fw={700} className="text-gray-900">
                    {stat.value}
                  </Text>
                  <Text size="sm" c="dimmed" className="text-gray-600">
                    {stat.label}
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>

          {/* Interests Section */}
          <Paper p={40} radius="md" className="border border-gray-200 mb-12">
            <Title
              order={2}
              size="h3"
              fw={700}
              mb="xl"
              className="text-gray-900"
            >
              What I Write About
            </Title>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  size="xl"
                  variant="light"
                  color="pink"
                  className="px-4 py-3 cursor-pointer hover:bg-pink-100 transition-colors"
                  styles={{
                    label: {
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    },
                  }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </Paper>

          {/* Personal Story Section */}
          <Paper p={40} radius="md" className="border border-gray-200 mb-12">
            <Title
              order={2}
              size="h3"
              fw={700}
              mb="lg"
              className="text-gray-900"
            >
              Introduce Myself
            </Title>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                In the{" "}
                <span className="text-pink-600 font-semibold">first book</span>{" "}
                I have wandered so much from my own adventures to tell of the
                experiences of my brother that all through the last two chapters
                I and the curate have been{" "}
                <span className="text-pink-600 font-semibold">
                  lurking in the empty house
                </span>{" "}
                at Halliford whither we fled to escape the Black Smoke.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My only curiosity then was to believe that the Martians were
                moving{" "}
                <span className="text-pink-600 font-semibold">London-ward</span>{" "}
                and away from her. Such vague{" "}
                <span className="text-pink-600 font-semibold">anxieties</span>{" "}
                keep the mind sensitive and painful. I tired of the sight of his
                selfish despair.
              </p>
            </div>
          </Paper>

          {/* Call to Action */}
          <Paper
            p={50}
            radius="md"
            className="bg-linear-to-br from-gray-900 to-gray-800 text-white text-center"
          >
            <Stack gap="md" align="center">
              <Title order={2} size="h3" fw={700} c="white">
                Let&apos;s Connect
              </Title>
              <Text size="lg" c="gray.3" maw={600}>
                I&apos;d love to hear from you! Whether you have questions,
                collaboration ideas, or just want to say hello, feel free to
                reach out.
              </Text>
              <Group gap="md" mt="md">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Read My Blog
                </Link>
              </Group>
            </Stack>
          </Paper>
        </Container>
      </div>

      <Footer />
    </>
  );
}
