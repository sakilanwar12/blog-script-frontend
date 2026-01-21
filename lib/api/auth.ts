import { envVars } from "@/config/env";

export async function adminLogin(payload: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${envVars.apiBaseURl}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
}

export async function getMe() {
  const res = await fetch(`${envVars.apiBaseURl}/api/v1/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  return res.json();
}