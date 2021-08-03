import { FC } from 'react';
import { Layout } from '../components/Layout';
import { CalendarPage } from '../components/CalendarPage';

const Calendar: FC = () => {
  return (
    <Layout title="Календарь">
      <CalendarPage />
    </Layout>
  );
};

export default Calendar;
