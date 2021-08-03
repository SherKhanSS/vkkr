import { gql } from '@apollo/client';

export const GET_NEWS = gql`
  query {
    news {
      title
      richContent
      published_at
    }
  }
`;
export const GET_ABOUT = gql`
  query {
    about {
      title
      id
      content
      tasksTitle
      tasks {
        id
        value
      }
    }
  }
`;
