import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 22px;
    line-height: 1.4;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #052942;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: 0.2s;

      :hover {
        background-color: #f6a117;
        color: #fff;
      }
    }

    .active a {
      color: #f6a117;

      :hover {
        color: #fff;
      }
    }
  }

  @media (min-width: ${DESKTOP_WITH}) {
    padding: 30px;
    max-width: ${MAX_WITH};
    margin: 0 auto;
  }
`;
