"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Redirects to login page automatically
  }, []);

  return null; // Empty page since it's redirecting
}
