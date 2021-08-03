import { ApolloProvider } from '@apollo/client';
import type { AppProps /*, AppContext */ } from 'next/app';
import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { useApollo } from '../lib/apolloClient';

const GlobalStyle = createGlobalStyle`

${normalize}

@font-face {
  font-display: swap;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Condensed'), local('Roboto-Condensed'),
    url('/fonts/RobotoCondensed-Regular.woff2') format('woff2'),
    url('/fonts/RobotoCondensed-Regular.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: 'Roboto Condensed';
  font-weight: bold;
  font-style: normal;
  src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'),
    url('/fonts/RobotoCondensed-Bold.woff2') format('woff2'),
    url('/fonts/RobotoCondensed-Bold.woff') format('woff');
}

html {
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', 'Geneva', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
}

img {
  max-width: 100%;
  height: auto;
}
`;

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
