import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $user_id: uuid!) {
    insert_categories(objects: { name: $name, user_id: $user_id }) {
      returning {
        name
        id
      }
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteTodos($id: Int) {
    delete_categories(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const GET_TODO_LIST = gql`
  query GetToDos {
    todos {
      category {
        name
      }
      is_trashed
      status
      id
      due_date
      title
      description
      created_at
    }
  }
`;

export const GET_TODO_BY_STATUS = gql`
  query GetTodosByStatus($status: String!) {
    todos(
      where: { _and: { is_trashed: { _eq: false }, status: { _eq: $status } } }
    ) {
      category {
        name
      }
      status
      id
      due_date
      title
      description
      created_at
      is_trashed
    }
  }
`;

export const GET_TODO_BY_ID = gql`
  query getFormData($id: Int!) {
    todos_by_pk(id: $id) {
      category_id
      id
      description
      due_date
      title
    }
    categories {
      id
      name
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo(
    $id: Int
    $category_id: Int
    $description: String
    $due_date: timestamptz
    $title: String
  ) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: {
        category_id: $category_id
        description: $description
        due_date: $due_date
        title: $title
      }
    ) {
      affected_rows
    }
  }
`;
export const DELETE_TODO = gql`
  mutation DeleteTodos($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
export const MARK_COMPLETE = gql`
  mutation MarkComplete($id: Int!) {
    update_todos(where: { id: { _eq: $id } }, _set: { status: "complete" }) {
      affected_rows
    }
  }
`;
export const MARK_PENDING = gql`
  mutation MarkComplete($id: Int!) {
    update_todos(where: { id: { _eq: $id } }, _set: { status: "pending" }) {
      affected_rows
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo(
    $category_id: Int
    $description: String
    $title: String!
    $user_id: uuid!
    $due_date: timestamptz
  ) {
    insert_todos(
      objects: {
        category_id: $category_id
        description: $description
        title: $title
        due_date: $due_date
        user_id: $user_id
      }
    ) {
      affected_rows
    }
  }
`;

export const MOVE_TO_TRASH = gql`
  mutation moveToTrash($id: Int!) {
    update_todos(where: { id: { _eq: $id } }, _set: { is_trashed: true }) {
      affected_rows
    }
  }
`;

export const GET_TRASH = gql`
  query getTrash {
    todos(where: { is_trashed: { _eq: true } }) {
      id
      status
      title
      description
    }
  }
`;

export const RECOVER_TRASH = gql`
  mutation recoverTrash($id: Int!) {
    update_todos(
      where: { _and: { id: { _eq: $id }, is_trashed: { _eq: true } } }
      _set: { is_trashed: false }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_TRASH = gql`
  mutation deleteTrash($id: Int!) {
    delete_todos(
      where: { _and: { is_trashed: { _eq: true }, id: { _eq: $id } } }
    ) {
      affected_rows
    }
  }
`;
