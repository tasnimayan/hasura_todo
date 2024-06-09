"use client";
import React from "react";
import AddTask from "./AddTask";

const Filter: React.FC = () => {
  const [hidden, setHidden] = React.useState<boolean>(true);
  return (
    <div className="flex justify-between me-10 border-b py-2 items-center mb-4">
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
            <AddTask />
          </div>
        </dialog>
      )}

      <h3 className="text-lg font-semibold">My Tasks</h3>
      <div>
        <div className="flex items-center gap-5">
          <button
            className="btn bg-green-400 py-2 px-4 rounded text-white hover:shadow active:border-none border border-gray-700"
            onClick={() => setHidden(false)}
          >
            + Add New Task
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
  );
};

export default Filter;
