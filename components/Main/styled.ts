import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.section`
  @media (min-width: ${DESKTOP_WITH}) {
    display: flex;
    justify-content: center;
    max-width: ${MAX_WITH};
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
