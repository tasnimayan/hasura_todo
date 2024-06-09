"use client";
import { DELETE_TRASH, RECOVER_TRASH } from "@/graphql/queries";
import { useMutation } from "@apollo/client";
import React from "react";

interface TrashCardProps {
  todo: {
    id: number;
    title: string;
    status: string;
    description: string;
  };
}

const TrashCard: React.FC<TrashCardProps> = ({ todo }) => {
  const [recoverTrash, { loading, error }] = useMutation(RECOVER_TRASH);
  const [deleteTrash] = useMutation(DELETE_TRASH);

  const handleRecover = async (id: number) => {
    try {
      await recoverTrash({ variables: { id: id } });
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteTrash({ variables: { id: id } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md bg-white py-4 px-3 shadow sm:rounded-lg flex justify-between">
      <div className="">
        <h3 className="text-lg leading-6 font-medium text-gray-900 line-clamp-2">
          {todo?.title}
        </h3>
        <p className="mb-1 max-w-2xl text-sm text-gray-500 line-clamp-1">
          {todo?.description}
        </p>
        <p className="text-sm font-medium text-gray-500">
          Status:
          <span
            className={`${
              todo.status == "active"
                ? "text-red-700"
                : todo.status == "pending"
                ? "text-orange-300"
                : "text-green-600"
            }`}
          >
            {todo?.status}
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          className="w-28 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
          onClick={() => handleRecover(todo?.id)}
        >
          Recover
        </button>
        <button
          className="w-28 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={() => handleDelete(todo?.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TrashCard;
