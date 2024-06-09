"use client";

import { useMutation, useQuery } from "@apollo/client";
import { GET_TODO_BY_ID, UPDATE_TODO } from "@/graphql/queries";

interface Category {
  id: string;
  name: string;
}

interface Todo {
  id: number;
  title: string;
  description?: string | null;
  due_date?: string;
  category_id?: number | null;
}

import React, { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation";

const TodoEditForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const params = useParams();
  const todo_id: number = params.id;

  const { data, loading, error } = useQuery(GET_TODO_BY_ID, {
    variables: { id: todo_id },
  });
  const [updateTodo, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_TODO);

  useEffect(() => {
    if (data) {
      let todos = data.todos_by_pk;

      setTitle(todos.title);
      setDescription(todos.description || "");
      setCategory(todos.category_id || "");
      setDueDate(todos.due_date || "");
    }
  }, [data]);

  const handleSubmit = async () => {
    try {
      let res = await updateTodo({
        variables: {
          id: todo_id,
          title,
          description,
          category_id: category,
          due_date: dueDate,
        },
      });
      if (res?.update_todos?.affected_rows) {
        redirect("/todos");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white min-w-96 p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      {updateError && <p className="text-red-500 mb-4 text-xs">Failed</p>}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="category">
          Select Category
        </label>
        <select
          name="category"
          id="category"
          className="w-full p-2 border border-gray-300 rounded"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">select category</option>
          {data?.categories.map((item: Category) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
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
          updateLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={handleSubmit}
        disabled={updateLoading}
      >
        {updateLoading ? "Updating..." : "Update Task"}
      </button>
    </div>
  );
};

export default TodoEditForm;
