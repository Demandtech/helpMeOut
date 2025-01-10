"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main>
      <h1>Login Page</h1>
      <Button onPress={() => router.push("/private/videos")} color="primary">
        Login
      </Button>
    </main>
  );
}
