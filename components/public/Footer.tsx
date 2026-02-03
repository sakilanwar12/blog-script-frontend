"use client";

import Link from "next/link";
import {
  Container,
  Group,
  Text,
  ActionIcon,
  Stack,
  Anchor,
} from "@mantine/core";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "mailto:contact@techblog.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 mt-12">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-8">
          {/* Brand Section */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4"
            >
              TechBlog
            </Link>
            <Text c="dimmed" size="sm" className="leading-relaxed mb-4">
              Exploring technology, design, and innovation through thoughtful
              articles and insights.
            </Text>
            <Group gap="sm">
              {socialLinks.map((social) => (
                <ActionIcon
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  size="lg"
                  aria-label={social.label}
                  className="hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:-translate-y-0.5 transition-all"
                >
                  <social.icon size={20} />
                </ActionIcon>
              ))}
            </Group>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Text
                fw={600}
                size="sm"
                tt="uppercase"
                mb="md"
                className="tracking-wider"
              >
                Navigation
              </Text>
              <Stack gap="xs">
                {footerLinks.navigation.map((link) => (
                  <Anchor
                    key={link.href}
                    component={Link}
                    href={link.href}
                    c="dimmed"
                    size="sm"
                    underline="never"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </div>

            <div>
              <Text
                fw={600}
                size="sm"
                tt="uppercase"
                mb="md"
                className="tracking-wider"
              >
                Legal
              </Text>
              <Stack gap="xs">
                {footerLinks.legal.map((link) => (
                  <Anchor
                    key={link.href}
                    component={Link}
                    href={link.href}
                    c="dimmed"
                    size="sm"
                    underline="never"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <Text c="dimmed" size="sm" ta="center">
            © {new Date().getFullYear()} TechBlog. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
