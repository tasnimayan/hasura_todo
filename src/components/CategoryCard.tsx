"use client";
import { DELETE_CATEGORY } from "@/graphql/queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const id = category.id;

  const [deleteCategory, { loading, error }] = useMutation(DELETE_CATEGORY);

  const handleDelete = async () => {
    try {
      await deleteCategory({ variables: { id } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center px-6 py-2 h-16 bg-white border shadow-sm rounded">
      <div
        className="relative hover:border rounded-full w-6 h-6 flex items-center justify-center cursor-pointer active:border z-0"
        onClick={() => setIsShow(!isShow)}
      >
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#a8a8a8"
          width="16"
          height="16"
          stroke="#a8a8a8"
        >
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>{" "}
          </g>
        </svg>

        <div
          className={`z-0 absolute top-full right-0 bg-white border rounded-lg overflow-hidden ${
            isShow ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col text-sm space-y-1">
            <button
              className="flex items-center gap-2 w-full ps-4 pe-8 py-2 hover:bg-gray-100 text-red-600"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
