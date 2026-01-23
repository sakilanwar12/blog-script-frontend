"use client";
import { useMounted } from "@mantine/hooks";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return children;
}

export default MountedProvider;
