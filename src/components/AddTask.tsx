// components/AddTask.tsx
import React, { useState } from "react";
import { nhost } from "@/lib/nhost";
import { gql } from "@apollo/client";
import { toast } from "react-toastify";

const ADD_TASK_MUTATION = gql`
  mutation AddTask($title: String!, $dueDate: date!) {
    insert_tasks_one(object: { title: $title, due_date: $dueDate }) {
      id
      title
      due_date
    }
  }
`;

const AddTask: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddTask = async () => {
    setLoading(true);
    setError(null);

    try {
      toast.success("please wait");
      const variables = { title, dueDate };
      const data = await nhost.graphql.request(ADD_TASK_MUTATION, variables);

      if (data.error) {
        setError(data.error.message);
      } else {
        // Clear form fields after successful submission
        setTitle("");
        setDueDate("");
        console.log("Task added successfully:", data);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
            console.log(category);
          }}
        >
          <option value="">Default</option>
          <option value="1">Cat 1</option>
          <option value="2">Cat 2</option>
          <option value="3">Cat 3</option>
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
        onClick={handleAddTask}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};

export default AddTask;
