"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-white text-black">
      <div className="w-[400px] p-10 border border-gray-500 rounded-2xl shadow-lg bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-600 text-lg text-center">{error}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mt-4 border border-gray-500 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 mt-4 border border-gray-500 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full mt-6 p-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
        <p
          className="text-lg mt-4 text-center cursor-pointer hover:underline"
          onClick={() => router.push("/signup")}
        >
          Don't have an account? <span className="font-semibold">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
