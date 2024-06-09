import Categories from "@/components/Categories";
import React from "react";

const CategoryPage: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">All Categories</h3>
      <div className="flex justify-end me-10 border-b py-2 items-center mb-4">
        <div>
          <div className="flex items-center gap-5">
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

      <Categories />
    </div>
  );
};

export default CategoryPage;
