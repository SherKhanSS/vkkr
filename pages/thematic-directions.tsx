import { FC } from 'react';
import { Layout } from '../components/Layout';
import { ThematicList } from '../components/ThematicList';

const ThematicDirections: FC = () => {
  return (
    <Layout title="Тематические направления">
      <ThematicList />
    </Layout>
  );
};

export default ThematicDirections;
