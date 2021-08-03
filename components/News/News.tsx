import { FC } from 'react';
import Link from 'next/link';
import {
  Wrap,
  Title,
  List,
  Date,
  NewsTitle,
  MoreLink,
  TitleWrap,
  MoreLinkWrap,
} from './styled';
import { news } from '../../news-mock';

const MAX_NEWS_COUNT = 2;

export const News: FC = () => {
  const latestNews = news.slice(0, MAX_NEWS_COUNT);

  return (
    <Wrap>
      <TitleWrap>
        <Title>НОВОСТИ КОНКУРСА</Title>
        <img src="/img/news.jpeg" alt="Новости" />
      </TitleWrap>
      <List>
        {latestNews.map((it, i) => {
          return (
            <li key={i}>
              <Date>
                {it.date.day} {it.date.mon} {it.date.year}
                {it.date.time}
              </Date>
              <NewsTitle>{it.data.title}</NewsTitle>
            </li>
          );
        })}
      </List>
      <MoreLinkWrap>
        <Link href={'/'} passHref>
          <MoreLink>Все новости</MoreLink>
        </Link>
      </MoreLinkWrap>
    </Wrap>
  );
};
