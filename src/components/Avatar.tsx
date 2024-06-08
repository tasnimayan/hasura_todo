"use client";
import React from "react";

const Avatar: React.FC = () => {
  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    if (response.ok) {
      window.location.href = "/login";
    } else {
      // Handle error
      console.error("Failed to log out");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-8 h-8 border border-emerald-700 rounded-full">
        {"TC"}
      </div>
      <button
        onClick={handleLogout}
        className="ms-4 hover:bg-gray-200 rounded px-4 "
      >
        Logout
      </button>
    </>
  );
};

export default Avatar;
