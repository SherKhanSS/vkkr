import { Document } from './generated/graphql';
import { initializeApollo } from './lib/apolloClient';
import { ApolloClient, DocumentNode } from '@apollo/client';

type FormattedDocument = {
  src: string;
  type: string;
  size: string;
  name: string;
};

export const getFormattedDocument = (document: Document): FormattedDocument => {
  const fileNameLength = document.file?.name.split('.').length;
  return {
    src: document.file?.url as string,
    type: document.file?.name.split('.')[
      (fileNameLength as number) - 1
    ] as string,
    size: document.file?.size + ' Кб',
    name: document.title as string,
  };
};

type PropsType = {
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialApolloState: ApolloClient<any>;
  };
  revalidate: number;
};

export const getProps = async (
  query: DocumentNode,
  variables: {
    start: number;
    limit: number;
  }
): Promise<PropsType> => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
