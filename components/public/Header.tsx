"use client";

import Link from "next/link";
import { Container, Group, ActionIcon, Anchor, Burger } from "@mantine/core";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu as MenuIcon,
  Search,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/lifestyle", label: "LIFESTYLE" },
  { href: "/fashion", label: "FASHION" },
  { href: "/technology", label: "TECHNOLOGY" },
  { href: "/health", label: "HEALTH" },
  { href: "/travel", label: "TRAVEL" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <Container size="xl">
        {/* Top Bar with Social Icons */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <Group gap="xs" visibleFrom="sm">
            {socialLinks.map((social) => (
              <ActionIcon
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                size="sm"
                color="gray"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </ActionIcon>
            ))}
          </Group>

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-gray-900 tracking-tight"
          >
            Callie
          </Link>

          {/* Right Icons */}
          <Group gap="xs">
            <ActionIcon variant="subtle" size="lg" color="gray">
              <MenuIcon size={20} />
            </ActionIcon>
            <ActionIcon variant="subtle" size="lg" color="gray">
              <Search size={20} />
            </ActionIcon>
          </Group>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center py-4">
          <Group gap="xl">
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                c="dark"
                fw={500}
                size="sm"
                underline="never"
                className="hover:text-red-500 transition-colors tracking-wide"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </nav>
      </Container>
    </header>
  );
}
