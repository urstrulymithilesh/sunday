"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/login"); // ✅ Redirect if not logged in
      } else {
        setUser(user);
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
      <div className="w-[500px] p-10 border border-gray-300 rounded-2xl shadow-2xl bg-white animate-slideIn transition-all duration-500">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900 animate-fadeIn">
          Welcome, {user?.email || "User"} 🎉
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          "Help Millions, To Make Millions."
        </p>
        <button
          className="w-full p-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
