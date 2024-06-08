import AddCategory from "@/components/AddCategory";
import Filter from "@/components/Filter";
import React from "react";

const CategoryPage: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">All Categories</h3>
      <div className="flex justify-end me-10 border-b py-2 items-center mb-4">
        <div>
          <div className="flex items-center gap-5">
            <button className="btn bg-green-400 py-2 px-4 rounded text-white hover:shadow active:border-none border border-gray-700">
              + Add New Category
            </button>
            <p>filter</p>
            <input
              type="text"
              name="sort"
              id=""
              className=" border rounded px-3 py-2"
            />

            <select name="sort" id="" className=" border rounded px-3 py-2">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 font-semibold">
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded">
          First Task
        </div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded">
          Immediate
        </div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded">
          In future
        </div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded"></div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded"></div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded"></div>
        <div className="flex justify-center items-center px-6 py-2 h-16 border shadow-sm rounded"></div>

        <div className="flex items-center justify-center h-16 rounded bg-white border border-gray-400">
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
        </div>
      </div>
      {/* <AddCategory /> */}
    </div>
  );
};

export default CategoryPage;
