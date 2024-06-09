"use client";

import Overview from "@/components/Overview";
import Filter from "@/components/Filter";

import { useQuery } from "@apollo/client";

import { GET_TODO_LIST, GET_TODO_BY_STATUS } from "../graphql/queries";
import Tasks from "@/components/Tasks";

export function Home() {
  const { loading, error, data } = useQuery(GET_TODO_LIST);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  // if (error) return <Error message={error.message} />;

  return (
    <main className="flex flex-col p-4 pb-20">
      <Overview />
      <Filter />
      {/* <AddTask /> */}

      <div className="grid grid-cols-2 gap-6 ">
        <Tasks query={GET_TODO_BY_STATUS} status="active" />
        <Tasks query={GET_TODO_BY_STATUS} status="complete" />
      </div>
    </main>
  );
}

export default Home;
