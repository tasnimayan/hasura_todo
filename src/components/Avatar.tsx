"use client";
import { nhost } from "@/lib/nhost";
import { useUserData } from "@nhost/react";
import { useRouter } from "next/navigation";
import React from "react";

const Avatar: React.FC = () => {
  const router = useRouter();
  const userData = useUserData();

  const handleLogout = async () => {
    await nhost.auth.signOut();
    router.push("/login"); // Redirect to the login page after logout
  };
  return (
    <div className="flex items-center">
      <button
        className="me-4 uppercase flex items-center bg-white shadow rounded-lg py-2 px-2"
        onClick={handleLogout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <p className="m-auto inset-0 text-sm text-center text-gray-800">
          Logout
        </p>
      </button>

      <div className="flex items-center justify-center w-10 h-10 text-xs border-2 rounded-full">
        {userData?.defaultRole}
      </div>
    </div>
  );
};

export default Avatar;
