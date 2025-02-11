"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/login"); // ✅ Redirects if user is not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-black animate-fadeIn">
        Help Millions, To Make Millions.
      </h1>
      <button
        className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
