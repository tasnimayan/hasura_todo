"use client";
import { MARK_COMPLETE, MOVE_TO_TRASH, MARK_PENDING } from "@/graphql/queries";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

interface TaskCardProps {
  todo: {
    id: number;
    title: string;
    description?: string | null;
    due_date?: string;
    status: string;
    category?: {
      name: string;
    };
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ todo }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const [moveToTrash] = useMutation(MOVE_TO_TRASH);
  const [markComplete] = useMutation(MARK_COMPLETE);
  const [markPending] = useMutation(MARK_PENDING);

  const handleOperation = async (id: number, operation: string) => {
    try {
      if (operation === "complete") {
        await markComplete({ variables: { id: id } });
      }
      if (operation === "pending") {
        await markPending({ variables: { id: id } });
      }
      if (operation === "trash") {
        await moveToTrash({ variables: { id: id } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg bg-white py-4 px-3 shadow sm:rounded-md">
      <div className="flex justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900 line-clamp-2">
          {todo?.title}
        </h3>
        <div
          className="relative hover:border rounded-full w-6 h-6 flex items-center justify-center cursor-pointer active:border z-0"
          onClick={() => setIsShow(!isShow)}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#a8a8a8"
            width="16"
            height="16"
            stroke="#a8a8a8"
          >
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>{" "}
            </g>
          </svg>

          <div
            className={`z-0 absolute top-full right-0 bg-white border rounded-lg overflow-hidden ${
              isShow ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col text-sm space-y-1">
              <Link
                href={`/todos/${todo.id}`}
                className="flex items-center gap-2 w-full ps-4 pe-8 py-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </Link>
              <button
                className="flex items-center gap-2 w-full ps-4 pe-8 py-2 hover:bg-gray-100 text-green-600"
                onClick={() => handleOperation(todo.id, "complete")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  fill-current scale-90"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
                </svg>
                Complete
              </button>

              <button
                className="flex items-center gap-2 w-full ps-4 pe-8 py-2 hover:bg-gray-100 text-yellow-600"
                onClick={() => handleOperation(todo.id, "pending")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  fill="#000000"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M511.9 183c-181.8 0-329.1 147.4-329.1 329.1s147.4 329.1 329.1 329.1c181.8 0 329.1-147.4 329.1-329.1S693.6 183 511.9 183z m0 585.2c-141.2 0-256-114.8-256-256s114.8-256 256-256 256 114.8 256 256-114.9 256-256 256z"
                      fill="#0F1F3C"
                    ></path>
                    <path
                      d="M548.6 365.7h-73.2v161.4l120.5 120.5 51.7-51.7-99-99z"
                      fill="#0F1F3C"
                    ></path>
                  </g>
                </svg>
                Pending
              </button>
              <button
                className="flex items-center gap-2 w-full ps-4 pe-8 py-2 hover:bg-gray-100 text-red-600"
                onClick={() => handleOperation(todo.id, "trash")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Trash
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-1 max-w-2xl text-sm text-gray-500 line-clamp-1">
        {todo?.description}
      </p>
      <p className="text-sm font-medium text-gray-500">
        Status:{" "}
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
  );
};

export default TaskCard;
