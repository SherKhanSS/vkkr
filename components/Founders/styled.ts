/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Title = styled.h2`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #052c47;
  text-align: center;
  margin-top: 30px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
    text-align: left;
    max-width: ${MAX_WITH};
    margin: 56px auto 36px;
    padding-left: 20px;
  }
`;

export const FoundersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 30px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: ${DESKTOP_WITH}) {
    justify-content: space-between;
    max-width: ${MAX_WITH};
    margin: 0 auto;
    padding-bottom: 60px;
  }
`;

export const FoundersItem = styled.li`
  margin-bottom: 20px;
  width: 49%;

  :nth-child(odd) {
    margin-right: 2%;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #052c47;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    img {
      margin-bottom: 10px;
    }
  }

  @media (min-width: ${DESKTOP_WITH}) {
    margin-right: 0;
    width: auto;
    max-width: 250px;

    a {
      font-size: 15px;
      line-height: 1.2;
    }
  }
`;
