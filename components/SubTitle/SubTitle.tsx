import { FC } from 'react';
import { Wrap, Title } from './styled';
import { LayoutProps } from './types';

export const SubTitle: FC<LayoutProps> = ({ title }) => {
  return (
    <Wrap>
      <img src="/img/background-title.png" alt="background-title" />
      <Title>{title}</Title>
    </Wrap>
  );
};
