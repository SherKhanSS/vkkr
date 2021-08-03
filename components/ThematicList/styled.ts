/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  line-height: 23px;
  color: #052942;
  padding: 10px;

  @media (min-width: ${DESKTOP_WITH}) {
    padding: 20px 170px 0;
    max-width: ${MAX_WITH};
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Count = styled.span`
  color: #7db9d8;
  text-decoration: underline;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-right: 15px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 40px;
    margin-right: 45px;
  }
`;

export const Text = styled.span``;
