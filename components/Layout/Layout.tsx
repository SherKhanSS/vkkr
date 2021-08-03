import { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Title, Main } from './styled';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Header isInner={true} />
      <Main>
        {title && <Title>{title}</Title>}
        {children}
      </Main>
      <Footer />
    </>
  );
};
