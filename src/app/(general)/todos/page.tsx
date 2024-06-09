import Filter from "@/components/Filter";
import Tasks from "@/components/Tasks";
import { GET_TODO_BY_STATUS } from "@/app/graphql/queries";

export default function Todos() {
  return (
    <>
      <div>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <Tasks query={GET_TODO_BY_STATUS} status="active" />
          <Tasks query={GET_TODO_BY_STATUS} status="pending" />
          <Tasks query={GET_TODO_BY_STATUS} status="complete" />
        </div>
      </div>
    </>
  );
}
