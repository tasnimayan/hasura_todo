"use client";

import { useSignInEmailPassword } from "@nhost/nextjs";
import React, { useState } from "react";

import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";
import { redirect, useRouter } from "next/navigation";

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <Login />
    </NhostProvider>
  );
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const { signInEmailPassword, isLoading } = useSignInEmailPassword();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let response = await signInEmailPassword(email, password);
      console.log(response);
      if (response.isSuccess) {
        sessionStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          })
        );
        // router.push("/");
        // redirect("/");
        alert("User logges");
      }

      console.log(response);
    } catch (err) {
      console.error(err);
      alert("Error creating user.");
    }
  };

  return (
    <div className="flex min-h-screen mt-20 justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl text-center font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Login
        </h4>
        <p className="mt-1 block font-sans text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter user credential to login.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-3">
            <div className="w-full min-w-[200px]">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleChange(setEmail)}
                required
                className="
                h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className="w-full min-w-[200px]">
              <label>Password:</label>
              <input
                type="password"
                minLength={8}
                value={password}
                onChange={handleChange(setPassword)}
                required
                className="h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0"
              />
            </div>
            <button
              type="submit"
              className="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-green-500/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Login
            </button>
          </div>
          {isLoading && <p>Loading...</p>}
        </form>
      </div>
    </div>
  );
};

export default App;
