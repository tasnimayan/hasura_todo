"use client";
import { useState } from "react";

interface TaskCardProps {
  title?: string;
  description?: string;
  due_date?: string;
  status?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  due_date,
  status,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="max-w-lg bg-white py-4 px-3 shadow sm:rounded-md">
      <div className="flex justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900 line-clamp-2">
          Todays Task
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
              <button className="w-full px-8 py-2 hover:bg-gray-100">
                Edit
              </button>
              <button className="w-full px-8 py-2 hover:bg-gray-100">
                Complete
              </button>
              <button className="w-full px-8 py-2 hover:bg-gray-100">
                Trash
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-1 max-w-2xl text-sm text-gray-500 line-clamp-1">
        Description for Item 1 is going to show here
      </p>
      <p className="text-sm font-medium text-gray-500">
        Status: <span className="text-green-600">Active</span>
      </p>
    </div>
  );
};

export default TaskCard;
