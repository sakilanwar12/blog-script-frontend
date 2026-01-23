"use client";

import { logOut } from "@/lib/api/auth.api";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

function Logout() {
  const router = useRouter();

  const { mutate: handleLogout, isPending } = useMutation({
    mutationFn: logOut,
    onSuccess: (data) => {
      // Show success notification
      notifications.show({
        title: "Success",
        message: data?.message || "Logout successful",
        color: "green",
      });

      router.refresh();
    },
    onError: (error) => {
      console.error(error);

      // Show error notification
      notifications.show({
        title: "Error",
        message: "Logout failed. Please try again.",
        color: "red",
      });

      router.refresh();
    },
  });

  return (
    <Button
      onClick={() => handleLogout()}
      loading={isPending}
      color="red"
      variant="outline"
    >
      Logout
    </Button>
  );
}

export default Logout;
