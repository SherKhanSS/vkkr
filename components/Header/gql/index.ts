import { gql } from '@apollo/client';

export const GET_GENERAL_DATA = gql`
  query {
    general {
      navBar {
        menuLinkList {
          text
          url
        }
      }
    }
  }
`;
