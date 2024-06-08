"use client";
import React, { useEffect, useState } from "react";
import {
  GET_TRASHED_TASKS,
  RECOVER_TASK_MUTATION,
  GET_CATEGORIES,
} from "@/app/graphql/queries";
import { nhost } from "@/lib/nhost";

interface Task {
  id: string;
  title: string;
  due_date: string;
  is_trashed: boolean;
}

const TrashPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrashedTasks = async () => {
      try {
        const { data, error } = await nhost.graphql.request(GET_TRASHED_TASKS);
        const response = await nhost.graphql.request(GET_CATEGORIES);
        console.log("Response=", response);

        if (error) {
          setError(error.message);
        } else {
          setTasks(data.tasks);
        }
      } catch (err) {
        setError("An unexpected error occurred.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrashedTasks();
  }, []);

  const handleRecoverTask = async (taskId: string) => {
    try {
      const variables = { id: taskId };
      const { data, error } = await nhost.graphql.request(
        RECOVER_TASK_MUTATION,
        variables
      );

      if (error) {
        setError(error.message);
      } else {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Trashed Tasks</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : tasks.length === 0 ? (
          <p>No trashed tasks.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-4 shadow rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-medium">{task.title}</h3>
                  <p className="text-gray-500">Due: {task.due_date}</p>
                </div>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                  onClick={() => handleRecoverTask(task.id)}
                >
                  Recover
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default TrashPage;
