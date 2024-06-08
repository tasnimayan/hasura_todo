import React from "react";
import TaskCard from "./TaskCard";
interface TaskListProps {
  type?: string;
}
const TaskList: React.FC = ({ type }: TaskListProps) => {
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
  return (
    <div>
      {listType[type] ? (
        <h5
          className={`${listType[type]} h-8 rounded py-1 px-4 font-semibold mb-4`}
        >
          {type}
        </h5>
      ) : null}
      <div className="flex flex-col gap-2">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskList;
