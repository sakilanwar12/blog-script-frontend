"use client";
import { Button, Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/api/auth";
import { notifications } from "@mantine/notifications";

function AdminLoginPage() {
  const router = useRouter(); 
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: adminLogin,
    onSuccess: () => {
      notifications.show({
        title: "Success",
        message: "Logged in successfully",
        color: "green",
      });
      router.push("/admin/dashboard");
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Error",
        message: error.message || "Invalid credentials",
        color: "red",
      });
    },
  });

  const onSubmit = (values: typeof form.values) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded  max-w-md w-full">
        <h1>Admin Login</h1>
        <form className="space-y-4" onSubmit={form.onSubmit(onSubmit)}>
          <Input placeholder="Email" {...form.getInputProps("email")} />
          <Input
            placeholder="Password"
            type="password"
            {...form.getInputProps("password")}
          />
          <Button type="submit" loading={isPending}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
