"use client";
import React, { useState } from "react";
import { CREATE_CATEGORY } from "@/app/graphql/queries";
import { useMutation } from "@apollo/client";

const AddCategory: React.FC = () => {
  const [name, setName] = useState<string>("");

  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY, {
    variable: { name },
  });

  const handleSubmit = async () => {
    try {
      await createCategory({ variables: { name } });
      setName("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
      {error && <p className="text-red-500 mb-4">{error.message}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Category Name
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button
        className={`w-full py-2 px-4 rounded text-white ${
          loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Wait..." : "Add Category"}
      </button>
    </div>
  );
};

export default AddCategory;
