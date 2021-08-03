/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Main = styled.main`
  @media (min-width: ${DESKTOP_WITH}) {
    padding: 50px 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #052c47;
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 25px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
    text-align: left;
    margin-bottom: 50px;
    max-width: ${MAX_WITH};
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
  }
`;
