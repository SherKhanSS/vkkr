/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.section`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 10px 30px;

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: ${MAX_WITH};
    margin: 0 auto;
    padding: 20px 70px;
  }
`;

export const List = styled.ul`
  border-left: 2px dashed #f6a117;
  padding: 22px 20px 0;

  ul {
    padding: 20px 10px 0;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    ul {
      padding-top: 35px;
    }
  }
`;

export const Item = styled.li`
  margin-bottom: 30px;
  position: relative;
  z-index: -1;

  @media (min-width: ${DESKTOP_WITH}) {
    margin-bottom: 60px;
  }

  :before {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    background-color: #f6a117;
    top: -22px;
    left: -28px;
    z-index: -2;

    @media (min-width: ${DESKTOP_WITH}) {
      width: 50px;
      height: 50px;
      left: -31px;
    }
  }
`;

export const SubItem = styled.li`
  position: relative;

  :not(:last-child) {
    margin-bottom: 15px;

    @media (min-width: ${DESKTOP_WITH}) {
      margin-bottom: 35px;
    }
  }

  :before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background-color: #f6a117;
    top: 2px;
    left: -38px;
    z-index: -1;

    @media (min-width: ${DESKTOP_WITH}) {
      left: -41px;
    }
  }
`;

export const UiDate = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #074b73;
  text-transform: uppercase;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const Stage = styled.span`
  color: #1cb4d6;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 6px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
  }
`;

export const Description = styled.span`
  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 18px;
    line-height: 1.3;
    margin-top: 10px;
  }
`;
