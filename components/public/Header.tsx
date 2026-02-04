"use client";

import Link from "next/link";
import {
  Container,
  Group,
  ActionIcon,
  Anchor,
  Drawer,
  Stack,
  Collapse,
} from "@mantine/core";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu as MenuIcon,
  Search,
  X,
  ChevronDown,
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

const categories = [
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/fashion", label: "Fashion" },
  { href: "/technology", label: "Technology" },
  { href: "/travel", label: "Travel" },
  { href: "/health", label: "Health" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
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
              Sakil
            </Link>

            {/* Right Icons */}
            <Group gap="xs">
              <ActionIcon
                variant="subtle"
                size="lg"
                color="gray"
                onClick={() => setMenuOpen(true)}
              >
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

      {/* Sidebar Menu */}
      <Drawer
        opened={menuOpen}
        onClose={() => setMenuOpen(false)}
        position="right"
        size="sm"
        padding={0}
        classNames={{
          content: "bg-gray-900",
          header: "bg-gray-900 border-b border-gray-800",
          close: "text-white hover:bg-gray-800",
        }}
      >
        <div className="bg-gray-900 text-white min-h-full">
          {/* Close button area */}
          <div className="flex justify-end p-4 border-b border-gray-800">
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} className="text-white" />
            </ActionIcon>
          </div>

          {/* Menu Items */}
          <Stack gap={0} className="py-4">
            {/* Home */}
            <Link
              href="/"
              className="px-6 py-4 text-white hover:bg-gray-800 transition-colors border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* Categories with Dropdown */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full px-6 py-4 text-white hover:bg-gray-800 transition-colors flex items-center justify-between"
              >
                <span>Categories</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <Collapse in={categoriesOpen}>
                <div className="bg-gray-800/50">
                  {categories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block px-10 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </Collapse>
            </div>

            {/* About Me */}
            <Link
              href="/about-me"
              className="px-6 py-4 text-white hover:bg-gray-800 transition-colors border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>

            {/* Contacts */}
            <Link
              href="/contact"
              className="px-6 py-4 text-white hover:bg-gray-800 transition-colors border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </Link>

            {/* Advertise */}
            <Link
              href="/advertise"
              className="px-6 py-4 text-white hover:bg-gray-800 transition-colors border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Advertise
            </Link>
          </Stack>
        </div>
      </Drawer>
    </>
  );
}
