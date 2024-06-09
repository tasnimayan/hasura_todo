"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AsideNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pt-4s">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
        <a href="/" className="font-semibold text-xl">
          Next To Do
        </a>
        <ul className="space-y-2 font-medium mt-4">
          <li>
            <Link
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                pathname === "/" ? "bg-gray-100" : ""
              }`}
              href="/"
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>

              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/todos"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                pathname === "/todos" ? "bg-gray-100" : ""
              }`}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M2,11H8a1,1,0,0,0,1-1V4A1,1,0,0,0,8,3H2A1,1,0,0,0,1,4v6A1,1,0,0,0,2,11ZM3,5H7V9H3ZM8,21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1ZM3,15H7v4H3ZM23,7a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,7Zm0,10a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,17Z"></path>
                </g>
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap">My To Do</span>
            </Link>
          </li>
          <li>
            <Link
              href="/category"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                pathname === "/category" ? "bg-gray-100" : ""
              }`}
            >
              <svg
                className="flex-shrink-0 w-6 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Layer_2" data-name="Layer 2">
                    {" "}
                    <g id="invisible_box" data-name="invisible box">
                      {" "}
                      <rect width="48" height="48" fill="none"></rect>{" "}
                    </g>{" "}
                    <g id="icons_Q2" data-name="icons Q2">
                      {" "}
                      <path d="M24,7.7,29.3,16H18.6L24,7.7M24,2a2.1,2.1,0,0,0-1.7,1L13.2,17a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H33a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-9-14A1.9,1.9,0,0,0,24,2Z"></path>{" "}
                      <path d="M43,43H29a2,2,0,0,1-2-2V27a2,2,0,0,1,2-2H43a2,2,0,0,1,2,2V41A2,2,0,0,1,43,43ZM31,39H41V29H31Z"></path>{" "}
                      <path d="M13,28a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-4A10,10,0,1,0,23,34,10,10,0,0,0,13,24Z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
            </Link>
          </li>
        </ul>
        {/* 
        <div className=" relative ">
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
              <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
              <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
          </a>
        </div> */}
      </div>
    </aside>
  );
};

export default AsideNav;
