import { format } from 'date-fns';
import { FC } from 'react';
import { New } from '../../generated/graphql';
import { Calendar } from '../Calendar';
import { Markdown } from '../Markdown';
import { PaginationList, usePagination } from '../PaginationList';
import { GET_NEWS, newsQueryVars } from './gql';
import {
  Container,
  Date as DateUi,
  List,
  NewsTitle,
  Title,
  Wrap,
} from './styled';

export const NewsPage: FC = () => {
  const { activePage, actualData, getDataFromGql } = usePagination(
    GET_NEWS,
    newsQueryVars
  );
  const totalNews = actualData?.newsConnection.aggregate.totalCount;
  const { news } = actualData;

  const getFormattedNewsDate = (date: string) => {
    const nativeDate = new Date(date);
    return {
      day: format(nativeDate, 'dd'),
      month: format(nativeDate, 'MM'),
      year: format(nativeDate, 'yyyy'),
      time: format(nativeDate, 'HH:mm'),
    };
  };

  return (
    <Container>
      <Calendar />
      <Wrap>
        <Title>НОВОСТИ</Title>
        <List>
          {news.map((newItem: New) => {
            const { day, month, year, time } = getFormattedNewsDate(
              newItem.published_at
            );
            return (
              <li key={newItem.id}>
                <DateUi>
                  <span>{day}</span> {month} <span>{`${year}`}</span>
                  {' г. '}
                  {time}
                </DateUi>
                <NewsTitle>
                  {newItem.richContent && (
                    <Markdown data={newItem.richContent} />
                  )}
                </NewsTitle>
              </li>
            );
          })}
        </List>
        <PaginationList
          activePage={activePage}
          setActivePage={(count) => {
            getDataFromGql(count);
          }}
          totalItemsCount={totalNews}
        />
      </Wrap>
    </Container>
  );
};
