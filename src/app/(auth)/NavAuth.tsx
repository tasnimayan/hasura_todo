import React from "react";
import Link from "next/link";

const NavAuth: React.FC = () => {
  return (
    <nav className=" bg-emerald-100 p-4 h-[3.2rem]">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Next To Do</Link>
        </div>

        <div className="me-10 space-x-4">
          <Link href="/login" className="hover:text-gray-300">
            Sign In
          </Link>
          <span className="border"></span>
          <Link href="/signup" className="hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavAuth;
