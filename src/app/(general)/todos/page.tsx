"use client";

import { useState, useEffect } from "react";
import { useNhostClient, useFileUpload } from "@nhost/nextjs";
import TaskList from "@/components/TaskList";
import Filter from "@/components/Filter";

const deleteTodo = `
    mutation($id: uuid!) {
      delete_todos_by_pk(id: $id) {
        id
      }
    }
  `;
const createTodo = `
    mutation($title: String!, $file_id: uuid) {
      insert_todos_one(object: {title: $title, file_id: $file_id}) {
        id
      }
    }
  `;
const getTodos = `
    query {
      todos {
        id
        title
      }
    }
  `;

export default function Todos() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoAttachment, setTodoAttachment] = useState(null);
  const [fetchAll, setFetchAll] = useState(false);

  const nhostClient = useNhostClient();
  const { upload } = useFileUpload();

  useEffect(() => {
    async function fetchTodos() {
      setLoading(true);
      const { data, error } = await nhostClient.graphql.request(getTodos);

      if (error) {
        console.error({ error });
        return;
      }

      setTodos(data.todos);
      setLoading(false);
    }

    fetchTodos();

    return () => {
      setFetchAll(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAll]);

  // const handleCreateTodo = async (e) => {
  //   e.preventDefault();

  //   let todo = { title: todoTitle };
  //   if (todoAttachment) {
  //     const { id, error } = await upload({
  //       file: todoAttachment,
  //       name: todoAttachment.name,
  //     });

  //     if (error) {
  //       console.error({ error });
  //       return;
  //     }

  //     todo.file_id = id;
  //   }

  //   const { error } = await nhostClient.graphql.request(createTodo, todo);

  //   if (error) {
  //     console.error({ error });
  //   }

  //   setTodoTitle("");
  //   setTodoAttachment(null);
  //   setFetchAll(true);
  // };

  // const handleDeleteTodo = async (id) => {
  //   if (!window.confirm("Are you sure you want to delete this TODO?")) {
  //     return;
  //   }

  //   const todo = todos.find((todo) => todo.id === id);
  //   if (todo.file_id) {
  //     await nhostClient.storage.delete({ fileId: todo.file_id });
  //   }

  //   const { error } = await nhostClient.graphql.request(deleteTodo, { id });
  //   if (error) {
  //     console.error({ error });
  //   }

  //   setFetchAll(true);
  // };

  // const completeTodo = async (id) => {
  //   const { error } = await nhostClient.graphql.request(
  //     `
  //     mutation($id: uuid!) {
  //       update_todos_by_pk(pk_columns: {id: $id}, _set: {completed: true}) {
  //         completed
  //       }
  //     }
  //   `,
  //     { id }
  //   );

  //   if (error) {
  //     console.error({ error });
  //   }

  //   setFetchAll(true);
  // };

  return (
    <div>
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <TaskList type="active" />
        <TaskList type="pending" />
        <TaskList type="complete" />
      </div>
    </div>
  );
}
