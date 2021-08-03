import styled from 'styled-components';
import { DESKTOP_WITH } from '../../constants';

export const Wrap = styled.section`
  padding: 15px 10px 20px;
  text-align: center;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-right: 40px;
  }
`;

export const TitleWrap = styled.div`
  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 315px;
    margin-right: 40px;
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

  @media (min-width: ${DESKTOP_WITH}) {
    li {
      max-width: 315px;
    }
  }
`;

export const Date = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #f6a117;
  display: inline-block;
  margin: 20px 0 0;
`;

export const NewsTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #052942;
`;

export const MoreLinkWrap = styled.div`
  @media (min-width: ${DESKTOP_WITH}) {
    width: 100%;
  }
`;

export const MoreLink = styled.a`
  display: inline-block;
  border: 1px solid #b7c5d8;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #17bcd4;
  text-decoration: none;
  text-transform: uppercase;
  padding: 3px 8px 1px;
  margin-top: 20px;

  :hover {
    box-shadow: -2px 2px 8px -4px rgb(0 0 0 / 50);
  }

  @media (min-width: ${DESKTOP_WITH}) {
    margin: 30px auto 0;
  }
`;
