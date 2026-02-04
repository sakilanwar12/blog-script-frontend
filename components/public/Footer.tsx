"use client";

import Link from "next/link";
import {
  Container,
  Text,
  TextInput,
  Button,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { Facebook, Twitter, Instagram, Dribbble } from "lucide-react";

const categories = [
  { name: "LIFESTYLE", count: 451 },
  { name: "FASHION", count: 230 },
  { name: "TECHNOLOGY", count: 40 },
  { name: "TRAVEL", count: 38 },
  { name: "HEALTH", count: 24 },
];

const tags = [
  "SOCIAL",
  "LIFESTYLE",
  "BLOG",
  "TRAVEL",
  "TECHNOLOGY",
  "FASHION",
  "LIFE",
  "NEWS",
  "MAGAZINE",
  "FOOD",
  "HEALTH",
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact", label: "Contacts" },
  { href: "/advertise", label: "Advertise" },
  { href: "/privacy", label: "Privacy" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
    color: "bg-blue-600",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
    color: "bg-sky-500",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
    color: "bg-pink-600",
  },
  {
    href: "https://dribbble.com",
    icon: Dribbble,
    label: "Dribbble",
    color: "bg-pink-500",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-16">
      <Container size="xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-bold text-white mb-4"
            >
              Callie
            </Link>
            <Text
              size="sm"
              c="dimmed"
              className="mb-6 leading-relaxed text-gray-400"
            >
              Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl
              purus in mollis nunc sed. Nunc non blandit massa enim nec.
            </Text>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <ActionIcon
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  className={social.color}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white" />
                </ActionIcon>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <Text
              fw={700}
              size="sm"
              mb="lg"
              className="uppercase tracking-wider"
            >
              CATEGORIES
            </Text>
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/${category.name.toLowerCase()}`}
                  className="flex items-center justify-between text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="text-sm">{category.name}</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <Text
              fw={700}
              size="sm"
              mb="lg"
              className="uppercase tracking-wider"
            >
              TAGS
            </Text>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  component={Link}
                  href={`/tag/${tag.toLowerCase()}`}
                  variant="outline"
                  color="gray"
                  size="sm"
                  className="cursor-pointer hover:bg-gray-800 transition-colors text-gray-400 border-gray-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <Text
              fw={700}
              size="sm"
              mb="lg"
              className="uppercase tracking-wider"
            >
              NEWSLETTER
            </Text>
            <Text size="sm" c="dimmed" className="mb-4 text-gray-400">
              Nec feugiat nisl pretium fusce id velit ut tortor pretium.
            </Text>
            <div className="space-y-3">
              <TextInput
                placeholder="Enter Your Email"
                size="md"
                classNames={{
                  input:
                    "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500",
                }}
              />
              <Button
                fullWidth
                size="md"
                className="bg-pink-600 hover:bg-pink-700"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="xs" c="dimmed" className="text-gray-500">
              Copyright ©2024 All rights reserved | This template is made with ♥
              by Colorlib
            </Text>
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
