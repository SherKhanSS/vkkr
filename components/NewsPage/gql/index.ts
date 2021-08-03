import { gql } from '@apollo/client';
const START = 0;
import { LIMIT } from '../../../constants';

export const GET_NEWS = gql`
  query news($start: Int!, $limit: Int!) {
    news(start: $start, limit: $limit) {
      title
      richContent
      published_at
      id
    }
    newsConnection {
      aggregate {
        totalCount
      }
    }
  }
`;

export const newsQueryVars = {
  start: START,
  limit: LIMIT,
};
