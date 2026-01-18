import { envVars } from "@/config/env";

export async function adminLogin(payload: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${envVars.apiBaseURl}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
}
