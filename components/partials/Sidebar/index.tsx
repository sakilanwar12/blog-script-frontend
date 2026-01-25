"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import { SetStateAction, useState } from "react";
import { navItems } from "./menus";

function Sidebar({
  setOpened,
}: {
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (href: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  return (
    <>
      {navItems.map((item, index) => {
        const Icon = item.icon;

        const isActive =
          pathname === item.href ||
          (item.href !== "/admin" && pathname.startsWith(item.href));

        const isOpen = openMenus[item.href] || isActive;

        return (
          <Box key={`menu-${index}`}>
            <Box
              onClick={() =>
                item.children ? toggleMenu(item.href) : setOpened(false)
              }
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
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {Icon && <Icon />}
              <Text size="sm" style={{ flex: 1 }}>
                {item.label}
              </Text>
            </Box>

            {/* Submenu */}
            {item?.children && isOpen && (
              <Box style={{ marginLeft: 36 }}>
                {item.children.map((child, childIndex) => {
                  const isChildActive = pathname === child.href;

                  return (
                    <Link
                      key={`submenu-${childIndex}`}
                      href={child.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={() => setOpened(false)}
                    >
                      <Box
                        style={{
                          padding: "8px 12px",
                          borderRadius: 6,
                          marginBottom: 4,
                          backgroundColor: isChildActive
                            ? "#edf2ff"
                            : "transparent",
                          color: isChildActive ? "#364fc7" : "#495057",
                          fontWeight: isChildActive ? 600 : 400,
                          cursor: "pointer",
                        }}
                      >
                        <Text size="sm">{child.label}</Text>
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
}

export default Sidebar;
