/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const ContentWrap = styled.div`
  padding: 20px 10px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: ${MAX_WITH};
    margin: 0 auto;
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 0;
  }
`;
