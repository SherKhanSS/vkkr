import { gql } from '@apollo/client';
const START = 0;
import { LIMIT } from '../../../constants';

export const GET_DOCUMENTS = gql`
  query {
    documents {
      id
      title
      file {
        url
      }
    }
  }
`;

export const GET_DOCUMENTS_PAGE = gql`
  query documentsPage($start: Int!, $limit: Int!) {
    documentsPage {
      title
      bannerText
      bannerLink
      documents(start: $start, limit: $limit) {
        title
        category
        id
        file {
          id
          size
          url
          name
        }
      }
    }
    documentsConnection(where: { category: "general" }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_PARTICIPANTS_PAGE = gql`
  query participantsPage($start: Int!, $limit: Int!) {
    participantsPage {
      title
      documents(start: $start, limit: $limit) {
        title
        category
        id
        file {
          id
          size
          url
          name
        }
      }
    }
    documentsConnection(where: { category: "participants" }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_EXPERTS_PAGE = gql`
  query expertsPage($start: Int!, $limit: Int!) {
    expertsPage {
      title
      documents(start: $start, limit: $limit) {
        title
        category
        id
        file {
          id
          size
          url
          name
        }
      }
    }
    documentsConnection(where: { category: "experts" }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_COORDINATORS_PAGE = gql`
  query coordinatorsPage($start: Int!, $limit: Int!) {
    coordinatorsPage {
      title
      documents(start: $start, limit: $limit) {
        title
        category
        id
        file {
          id
          size
          url
          name
        }
      }
    }
    documentsConnection(where: { category: "coordinators" }) {
      aggregate {
        count
      }
    }
  }
`;

export const documentsVars = {
  start: START,
  limit: LIMIT,
};
