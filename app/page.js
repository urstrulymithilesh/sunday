"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 1000); // ✅ Slight delay before redirecting
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-bold animate-fadeIn">Redirecting to Login...</h1>
      <p className="text-lg text-gray-600 mt-2 animate-fadeIn">Please wait...</p>
    </div>
  );
}
