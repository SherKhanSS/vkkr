/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding-left: 10px;

  @media (min-width: ${DESKTOP_WITH}) {
    margin: 40px 0 30px;
    max-width: ${MAX_WITH};
    padding-left: 50px;
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #052c47;
  text-transform: uppercase;
  margin-left: -51px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
