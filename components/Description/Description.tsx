import { FC } from 'react';
import { Markdown } from '../Markdown';
import { ContentWrap } from './styled';
type AboutPropsType = {
  content?: string;
};
export const Description: FC<AboutPropsType> = ({ content }) => {
  return (
    <section>
      <ContentWrap>
        <Markdown data={content} />
      </ContentWrap>
    </section>
  );
};
