import { FC } from 'react';
import { Layout } from '../components/Layout';
import { NewsPage } from '../components/NewsPage';
import { GET_NEWS, newsQueryVars } from '../components/NewsPage/gql';
import { GetStaticProps } from 'next';
import { getProps } from '../utills';

const News: FC = () => {
  return (
    <Layout>
      <NewsPage />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return getProps(GET_NEWS, newsQueryVars);
};

export default News;
