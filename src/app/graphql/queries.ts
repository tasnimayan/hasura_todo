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
  mutation CreateCategory($name: String!) {
    insert_categories(objects: { name: $name }) {
      returning {
        name
        id
      }
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

export const DELETE_TODO = gql`
  mutation DeleteTodos($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
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
