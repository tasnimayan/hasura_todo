import { gql } from "@apollo/client";

export const GET_TRASHED_TASKS = gql`
  query getTrash {
    todos(order_by: { updated_at: asc }, where: { is_trashed: { _eq: true } }) {
      id
      status
      description
      created_at
      category_id
      title
      due_date
      is_trashed
    }
  }
`;
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export const RECOVER_TASK_MUTATION = gql`
  mutation RecoverTask($id: uuid!) {
    update_tasks_by_pk(pk_columns: { id: $id }, _set: { is_trashed: false }) {
      id
      title
      due_date
      is_trashed
    }
  }
`;

export const GET_TODO_LIST = gql`
  query getTodos {
    todos {
      is_trashed
      status
      title
      id
      due_date
      description
      category_id
      created_at
    }
  }
`;
