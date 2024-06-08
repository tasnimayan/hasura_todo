import React from "react";

const Filter: React.FC = () => {
  return (
    <div className="flex justify-between me-10 border-b py-2 items-center mb-4">
      <h3 className="text-lg font-semibold">My Tasks</h3>
      <div>
        <div className="flex items-center gap-5">
          <button className="btn bg-green-400 py-2 px-4 rounded text-white hover:shadow active:border-none border border-gray-700">
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
