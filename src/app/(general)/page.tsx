"use client";

import { useEffect, useState } from "react";
import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";

const GetTodos = `
  query {
    todos {
      id
      status
      description
      created_at
      category_id
      title
    }
  }
`;

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <Home />
    </NhostProvider>
  );
}

export function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const { data, error } = await nhost.graphql.request(GetTodos);

      setMovies(data.todos);
      setLoading(false);
    }

    fetchMovies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
        <form>
          <div className="relative mb-6">
            <input
              type="email"
              className="block min-h-[auto] w-full rounded border px-3 py-[0.32rem] leading-[1.6] focus:outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 "
              id="exampleInput8"
              placeholder="Email address"
            />
            <label
              htmlFor=""
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
            >
              Email address
            </label>
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows={3}
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="exampleFormControlTextarea13"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
          >
            Add Task
          </button>
        </form>
      </div>
      <div>
        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16 gap-4">
          <li>
            <div className=" w-[400px] px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Item 1
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Description for Item 1
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Status: <span className="text-green-600">Active</span>
                </p>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </a>
              </div>
            </div>
          </li>
          <li className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Item 2
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Description for Item 2
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Status: <span className="text-red-600">Inactive</span>
                </p>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </a>
              </div>
            </div>
          </li>
          <li className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Item 3
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Description for Item 3
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Status: <span className="text-yellow-600">Pending</span>
                </p>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
