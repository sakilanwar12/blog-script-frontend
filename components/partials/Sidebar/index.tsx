"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text, Box, Badge } from "@mantine/core";
import "@mantine/core/styles.css";
import { SetStateAction } from "react";
import { navItems } from "./menus";

function Sidebar({
  setOpened,
}: {
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== "/admin" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setOpened(false)}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 8,
                marginBottom: 4,
                backgroundColor: isActive ? "#e7f5ff" : "transparent",
                color: isActive ? "#1971c2" : "#495057",
                cursor: "pointer",
                transition: "background-color 0.2s",
                fontWeight: isActive ? 600 : 400,
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Icon size={20} />
              <Text size="sm" style={{ flex: 1 }}>
                {item.label}
              </Text>
              {item.badge && (
                <Badge size="xs" variant="filled" color="blue">
                  {item.badge}
                </Badge>
              )}
            </Box>
          </Link>
        );
      })}
    </>
  );
}

export default Sidebar;
