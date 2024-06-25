import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    findAll {
      id
      first_name
      last_name
      participation
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($first_name: String!, $last_name: String!, $participation: Float!) {
    createUser(createUserInput: {
      first_name: $first_name,
      last_name: $last_name,
      participation: $participation
    }) {
      id
      first_name
      last_name
      participation
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    removeUser(id: $id) {
      id
      first_name
      last_name
      participation
    }
  }
`;
