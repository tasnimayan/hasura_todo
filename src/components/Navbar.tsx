import React, { useEffect } from "react";
import Avatar from "./Avatar";
import { SignedIn } from "@nhost/react";

const Navbar: React.FC = () => {
  return (
    <header className="border rounded-lg mt-2 bg-gray-100">
      <nav className="h-full flex justify-between md:justify-end items-center px-4 sm:px-6 lg:px-8">
        <button className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <SignedIn>
          <Avatar />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Navbar;
