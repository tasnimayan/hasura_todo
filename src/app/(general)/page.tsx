"use client";

import { useEffect, useState } from "react";
import Overview from "@/components/Overview";
import TaskList from "@/components/TaskList";
import Filter from "@/components/Filter";
import { GET_CATEGORIES, GET_TODO_LIST } from "../graphql/queries";
import { useNhostClient, useUserData } from "@nhost/nextjs";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const nhostClient = useNhostClient();

  // const { user, isLoading } = useUserData();

  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      const { data, error } = await nhostClient.graphql.request(GET_TODO_LIST);

      if (error) {
        console.error({ error });
        return;
      }

      setTodos(data.todos);
      setLoading(false);
      console.log(todos);
    }

    fetchTodos();
  }, []);

  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  return (
    <main className="flex flex-col p-4 pb-20">
      {/* <p>{!isLoading ? console.log(user) : " no user"}</p> */}
      <Overview />
      <Filter />
      {/* <AddTask /> */}

      <div className="grid grid-cols-2 gap-6 ">
        <h5 className="h-8 bg-red-100 rounded py-1 px-4 font-semibold">
          Active
        </h5>
        <h5 className="h-8 bg-green-200 rounded py-1 px-4 font-semibold">
          Complete
        </h5>
        <TaskList />
        <TaskList />
      </div>
    </main>
  );
}

export default Home;
