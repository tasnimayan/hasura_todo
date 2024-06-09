"use client";
import { GET_TRASH } from "@/graphql/queries";
import TrashCard from "@/components/TrashCard";
import { useQuery } from "@apollo/client";
import React from "react";

const TrashPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TRASH);
  if (loading) {
    return <p>... Loading</p>;
  }
  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Trashed Tasks</h2>
        {data?.todos.length === 0 ? (
          <p>No Items in trash.</p>
        ) : (
          <ul className="space-y-4">
            {data.todos.map((item) => (
              <TrashCard todo={item} key={item.id} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default TrashPage;
