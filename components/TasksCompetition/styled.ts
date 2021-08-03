/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.section`
  background-color: #ddf3fe;
  padding: 25px 30px 30px;

  @media (min-width: ${DESKTOP_WITH}) {
    position: relative;
    width: 100%;
    padding: 10px 0 10px;
    margin-top: 30px;

    :before {
      position: absolute;
      content: '';
      border-left: 15vw solid transparent;
      border-right: 85vw solid transparent;
      border-bottom: 41px solid #ddf3fe;
      top: -40px;
    }

    :after {
      position: absolute;
      content: '';
      width: 100%;
      height: 51px;
      background-color: #ddf3fe;
      bottom: -50px;
    }
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
    max-width: ${MAX_WITH};
    margin-left: auto;
    margin-right: auto;
    padding: 0 60px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  line-height: 1.3;
  color: #052942;
  padding-top: 10px;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: ${MAX_WITH};
    margin: 0 auto;
    padding: 20px 60px 0;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;
  padding-left: 20px;
  position: relative;

  :before {
    position: absolute;
    content: '';
    top: 7px;
    left: 0;
    width: 12px;
    height: 12px;
    background-color: #17bcd4;
  }

  @media (min-width: ${DESKTOP_WITH}) {
  }
`;
