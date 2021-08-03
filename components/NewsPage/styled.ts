import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Container = styled.section`
  @media (min-width: ${DESKTOP_WITH}) {
    display: flex;
    padding: 0 60px 20px;
    max-width: ${MAX_WITH};
    margin: 0 auto;

    section:first-child {
      order: 2;
    }
  }
`;

export const Wrap = styled.section`
  padding: 35px 10px 20px;
  text-align: center;

  @media (min-width: ${DESKTOP_WITH}) {
    order: 1;
    text-align: left;
    padding-top: 15px;
    padding-right: 100px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  color: #052c47;
  text-align: center;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
    text-align: left;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Date = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #f6a117;
  display: inline-block;
  margin: 20px 0 0;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 17px;

    span {
      font-size: 24px;
    }
  }
`;

export const NewsTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #052942;
`;
