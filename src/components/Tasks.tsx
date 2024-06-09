"use client";
import React from "react";
import TaskCard from "./TaskCard";
import { useQuery } from "@apollo/client";

interface Todo {
  id: string;
  due_date: string | null;
  title: string;
  description: string | null;
  created_at?: string;
  is_trashed?: boolean;
  status: string;
  category?: {
    name: string;
  };
}

interface GetTodosQuery {
  data: {
    todos: Todo[];
  };
}

interface Props {
  query: string; // The GraphQL query string for data fetching
  status?: string | null; // todos by the status types
}

const Tasks: React.FC<Props> = ({ query, status }) => {
  interface ListType {
    active?: string;
    pending?: string;
    complete?: string;
  }
  const listType: ListType = {
    active: "bg-red-100",
    pending: "bg-orange-100",
    complete: "bg-green-100",
  };

  const { data, loading, error } = useQuery<GetTodosQuery>(query, {
    variables: { status },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {listType[status] ? (
        <h5
          className={`${listType[status]} h-8 rounded py-1 px-4 font-semibold mb-4 uppercase`}
        >
          {status}
        </h5>
      ) : null}
      <div className="flex flex-col gap-2">
        {data?.todos?.map((todo) => {
          return <TaskCard todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
