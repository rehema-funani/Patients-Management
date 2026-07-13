"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../services/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await login(email, password);

      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold mb-2">
          Patient Management
        </h1>

        <p className="text-gray-500 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-600">{error}</p>
          )}

          <button
            className="bg-blue-600 text-white w-full rounded-lg p-3 hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}