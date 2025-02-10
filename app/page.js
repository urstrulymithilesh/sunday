import { auth } from "../firebase"; // ✅ Correct path
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Redirect to login page
  }, []);

  return null;
}
