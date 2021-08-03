import { FC } from 'react';
import { Founders } from '../Founders';
import { Info } from '../Info';
import { News } from '../News';
import { Description } from '../Description';
import { Calendar } from '../Calendar';
import { Wrap } from './styled';

export const Main: FC = () => {
  return (
    <main>
      <Wrap>
        <News />
        <Calendar />
      </Wrap>
      <Description />
      <Info />
      <Founders />
    </main>
  );
};
