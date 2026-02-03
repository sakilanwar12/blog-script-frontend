"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  TextInput,
  ActionIcon,
  Button,
  Anchor,
} from "@mantine/core";
import { Search, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <Container size="xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all"
          >
            TechBlog
          </Link>

          {/* Desktop Navigation */}
          <Group gap="xl" visibleFrom="md">
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                c="dimmed"
                fw={500}
                underline="never"
                className="relative hover:text-blue-500 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>

          {/* Right Side Actions */}
          <Group gap="md">
            {/* Search */}
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="hover:bg-gray-100"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </ActionIcon>

            {/* CTA Button */}
            <Button component={Link} href="/subscribe" visibleFrom="md">
              Subscribe
            </Button>

            {/* Mobile Menu Toggle */}
            <Burger
              opened={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              hiddenFrom="md"
              size="sm"
            />
          </Group>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 animate-in fade-in slide-in-from-top-2">
            <TextInput
              placeholder="Search articles..."
              leftSection={<Search size={16} />}
              size="md"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-2 py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                c="dimmed"
                fw={500}
                underline="never"
                className="p-4 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Anchor>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
