"use client";
import React, { useState } from "react";
import { nhost } from "@/lib/nhost";
import { gql } from "@apollo/client";

const AddCategory: React.FC = () => {
  const [name, setName] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddCategory = async () => {
    setLoading(true);
    setError(null);
    try {
      // const data = await nhost.graphql.request(ADD_CATEGORY_MUTATION, title);
      // if (data.error) {
      //   setError(data.error.message);
      // } else {
      //   // Clear form fields after successful submission
      //   console.log("Task added successfully:", data);
      // }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
        onClick={handleAddCategory}
        disabled={loading}
      >
        {loading ? "Wait..." : "Add Category"}
      </button>
    </div>
  );
};

export default AddCategory;
