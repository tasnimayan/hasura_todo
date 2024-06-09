import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/app/graphql/queries";

interface Category {
  id: string;
  title: string;
}

import React, { useState } from "react";

const AddTask: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const { data, loading, error } = useQuery<GetCategoryQuery>(GET_CATEGORIES);

  return (
    <div className="bg-white min-w-96 p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>
      {error && <p className="text-red-500 mb-4 text-xs">Failed</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          name="description"
          rows={3}
          placeholder="Description"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="dueDate">
          Select Category
        </label>
        <select
          name="category"
          id=""
          className="w-full p-2 border border-gray-300 rounded"
          value={category}
          defaultValue={"default"}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
            console.log(category);
          }}
        >
          <option value="">select category</option>
          {data?.categories.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="dueDate">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button
        className={`w-full py-2 px-4 rounded text-white ${
          loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
        // onClick={handleAddTask}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};

export default AddTask;
