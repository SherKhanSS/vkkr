import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { Description } from '../components/Description';
import { Layout } from '../components/Layout';
import { TasksCompetition } from '../components/TasksCompetition';
import { About } from '../generated/graphql';
import { GET_ABOUT } from '../gql';

type AboutPropsType = {
  about: About;
};
const News: FC = () => {
  const { data } = useQuery<AboutPropsType>(GET_ABOUT);

  return (
    <>
      {data?.about.title && (
        <Layout title={data?.about?.title}>
          {data?.about?.content && (
            <Description content={data?.about?.content} />
          )}
          {data?.about && <TasksCompetition about={data?.about} />}
        </Layout>
      )}
    </>
  );
};

export default News;
