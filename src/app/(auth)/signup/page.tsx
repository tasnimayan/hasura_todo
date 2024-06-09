"use client";

import React, { useState } from "react";

import { useSignUpEmailPassword } from "@nhost/nextjs";
import { redirect } from "next/navigation";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      return alert("Fields can not be empty");
    }

    let { accessToken, error, isSuccess } = await signUpEmailPassword(
      email,
      password
    );

    if (isSuccess) {
      sessionStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: accessToken,
        })
      );
      alert("Verify you email with the link sent to your email!");
      redirect("/login");
    }
    if (!accessToken) {
      console.log(accessToken);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Sign Up
        </h2>
        <p className="text-center text-gray-700">
          Enter your details to register.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleChange(setEmail)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                id="password"
                type="password"
                minLength={8}
                value={password}
                onChange={handleChange(setPassword)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-md ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:ring-pink-500"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
          {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
