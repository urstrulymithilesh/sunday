"use client";  // ✅ Required for useRouter & useEffect to work

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login"); // ✅ Redirects to login without history push
  }, []);

  return (
    <div className="flex h-screen justify-center items-center bg-white text-black">
      <h1 className="text-3xl font-bold">Redirecting to Login...</h1>
    </div>
  );
}
