"use client";

import React, { useState } from "react";
import { AppShell, Text, Box, MantineProvider } from "@mantine/core";
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

        <AppShell.Navbar p="md" style={{ border: 0 }}>
          <Sidebar setOpened={setOpened} />
        </AppShell.Navbar>

        <AppShell.Main>
          <div className="p-5">{children}</div>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
