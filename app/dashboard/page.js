"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center bg-white text-black transition-all duration-300">
      <h1 className="text-5xl font-bold mb-6 text-center animate-fadeIn">
        "Help Millions, <br /> To Make Millions."
      </h1>
      <button
        className="mt-4 p-4 bg-red-600 text-white text-xl font-semibold rounded-xl hover:bg-red-500 transition-all duration-500"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
