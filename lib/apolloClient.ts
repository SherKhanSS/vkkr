import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://adress/graphql',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            documentsPage: {
              merge(existing, incoming) {
                return { ...existing, ...incoming };
              },
            },
            participantsPage: {
              merge(existing, incoming) {
                return { ...existing, ...incoming };
              },
            },
            expertsPage: {
              merge(existing, incoming) {
                return { ...existing, ...incoming };
              },
            },
            coordinatorsPage: {
              merge(existing, incoming) {
                return { ...existing, ...incoming };
              },
            },
          },
        },
      },
    }),
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initializeApollo(initialState: any = null): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: unknown): ApolloClient<unknown> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
