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
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        router.push("/dashboard"); // ✅ Redirects smoothly after animation
      }, 1500);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-[400px] p-8 border border-gray-300 rounded-2xl shadow-2xl bg-white animate-slideIn transition-all duration-500">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900 transition-all duration-300 animate-fadeIn">Login</h2>
        
        {error && <p className="text-red-600 text-lg text-center animate-shake">{error}</p>}
        
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mt-4 border border-gray-400 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300 hover:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 mt-4 border border-gray-400 rounded-lg text-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300 hover:shadow-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className={`w-full mt-6 p-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
          }`}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          className="text-lg mt-4 text-center cursor-pointer text-gray-700 hover:underline transition-all duration-300"
          onClick={() => router.push("/signup")}
        >
          Don't have an account? <span className="font-semibold">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
