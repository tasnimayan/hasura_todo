"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/app/graphql/queries";
import AddCategory from "./AddCategory";

interface Category {
  id: string;
  title: string;
}

interface GetCategoryQuery {
  data: {
    categories: Category[];
  };
}

const Categories: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const { data, loading, error } = useQuery<GetCategoryQuery>(GET_CATEGORIES);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 font-semibold">
        {data?.categories?.map((category) => {
          return (
            <div
              className="flex justify-center items-center px-6 py-2 h-16 bg-white border shadow-sm rounded"
              key={category.id}
            >
              {category.name}
            </div>
          );
        })}

        <button
          className="flex items-center justify-center h-16 rounded bg-gray-100 border border-gray-200 hover:border-gray-400 hover:bg-gray-50"
          onClick={() => setHidden(false)}
        >
          <p className="text-2xl text-gray-400 ">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </button>
      </div>
      {!hidden && (
        <dialog
          className={`fixed left-0 top-0 h-screen w-full bg-black bg-opacity-15 z-50 overflow-x-auto backdrop-blur-sm flex justify-center items-center`}
        >
          <div className="relative">
            <button
              className="absolute bottom-full left-full  text-red-500 border font-bold rounded w-12 h-12 text-2xl block float-end"
              onClick={() => setHidden(true)}
            >
              X
            </button>
            <AddCategory />
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Categories;
