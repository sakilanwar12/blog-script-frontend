'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  AppShell, 
  Burger, 
  Group, 
  Text, 
  Avatar,
  Menu,
  UnstyledButton,
  rem,
  Box,
  TextInput,
  MantineProvider
} from '@mantine/core';
import '@mantine/core/styles.css';
import { 
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User
} from 'lucide-react';
import Sidebar from './Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" size="sm" />
              <Link href="/admin" style={{ textDecoration: 'none' }}>
                <Text size="xl" fw={700} style={{ 
                  background: 'linear-gradient(to right, #2563eb, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  cursor: 'pointer'
                }}>
                  Admin Panel
                </Text>
              </Link>
            </Group>

            <Group gap="md">
              <TextInput
                placeholder="Search..."
                leftSection={<Search size={16} />}
                visibleFrom="sm"
                styles={{ input: { width: rem(200) } }}
              />
              
              <UnstyledButton style={{ position: 'relative' }}>
                <Bell size={20} />
                <Box style={{ 
                  position: 'absolute', 
                  top: -4, 
                  right: -4, 
                  width: 8, 
                  height: 8, 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%' 
                }} />
              </UnstyledButton>

              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <UnstyledButton>
                    <Group gap="xs">
                      <Avatar color="blue" radius="xl" size="sm">JD</Avatar>
                      <Box visibleFrom="sm">
                        <Text size="sm" fw={500}>John Doe</Text>
                      </Box>
                      <ChevronDown size={16} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item leftSection={<User size={16} />}>
                    Profile
                  </Menu.Item>
                  <Menu.Item leftSection={<Settings size={16} />}>
                    Settings
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item 
                    color="red" 
                    leftSection={<LogOut size={16} />}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <AppShell.Section grow>
            <Sidebar setOpened={setOpened} />
          </AppShell.Section>

          <AppShell.Section>
            <Box style={{ 
              padding: 16, 
              background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
              borderRadius: 8, 
              color: 'white' 
            }}>
              <Text size="sm" fw={600} mb="xs">Need Help?</Text>
              <Text size="xs" style={{ opacity: 0.9 }}>Check our documentation</Text>
            </Box>
          </AppShell.Section>
        </AppShell.Navbar>

        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}