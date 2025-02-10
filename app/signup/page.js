"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! Please login.");
      router.push("/login");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use. Try logging in.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format. Please enter a valid email.");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters long.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-white text-black transition-all duration-300">
      <div className="w-[400px] p-10 border border-gray-500 rounded-2xl shadow-lg bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-600 text-lg text-center">{error}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 mt-4 border border-gray-500 rounded-xl text-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create a password"
          className="w-full p-4 mt-4 border border-gray-500 rounded-xl text-lg bg-gray-50 focus:outline-none focus:ring-4 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full mt-6 p-4 bg-black text-white text-xl font-semibold rounded-xl hover:bg-gray-800 transition-all duration-500"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <p
          className="text-lg mt-4 text-center cursor-pointer hover:underline"
          onClick={() => router.push("/login")}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
