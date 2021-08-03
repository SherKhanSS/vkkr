/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 10px 30px;

  @media (min-width: ${DESKTOP_WITH}) {
    padding: 20px 60px 40px;
    max-width: ${MAX_WITH};
    margin: 0 auto;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Name = styled.span`
  color: #052942;
  margin-bottom: 20px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 19px;
    margin-bottom: 15px;
  }
`;

export const Type = styled.span`
  color: #9fa8b8;
  margin-bottom: 15px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const CustomLink = styled.span`
  color: #17bcd4;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  span {
    margin-left: 10px;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }
`;
