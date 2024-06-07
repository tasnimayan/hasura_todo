// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-emerald-100 p-4 h-[72px]">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Hasura ToDo</Link>
        </div>
        <div className="ml-10 space-x-4">
          <Link href="/tasks" className="hover:text-gray-300">
            My Task
          </Link>
          <Link href="/team" className="hover:text-gray-300">
            My Team
          </Link>
        </div>

        <div className="flex items-center justify-center w-12 h-12 border border-emerald-700 rounded-full">
          {"TC"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
