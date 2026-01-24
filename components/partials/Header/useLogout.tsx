import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { logOut } from "@/lib/api/auth.api";

export function useLogout() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: (data) => {
      notifications.show({
        title: "Success",
        message: data?.message || "Logout successful",
        color: "green",
      });

      router.refresh();
    },
    onError: () => {
      notifications.show({
        title: "Error",
        message: "Logout failed. Please try again.",
        color: "red",
      });

      router.refresh();
    },
  });

  return mutation;
}
