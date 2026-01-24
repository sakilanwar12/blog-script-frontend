"use client";

import React, { useState } from "react";
import {
  AppShell,
  Text,
  Box,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Header opened={opened} setOpened={setOpened} />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <AppShell.Section grow>
            <Sidebar setOpened={setOpened} />
          </AppShell.Section>

          <AppShell.Section>
            <Box
              style={{
                padding: 16,
                background: "linear-gradient(135deg, #3b82f6, #9333ea)",
                borderRadius: 8,
                color: "white",
              }}
            >
              <Text size="sm" fw={600} mb="xs">
                Need Help?
              </Text>
              <Text size="xs" style={{ opacity: 0.9 }}>
                Check our documentation
              </Text>
            </Box>
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
