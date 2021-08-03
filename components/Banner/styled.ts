/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Wrap = styled.section`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 10px 20px;

  @media (min-width: ${DESKTOP_WITH}) {
    padding-top: 20px;
    padding-bottom: 40px;
    align-items: flex-start;
    text-align: left;
    padding: 30px 60px 20px;
    max-width: ${MAX_WITH};
    margin: 0 auto;
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

export const BannerContainer = styled.div`
  border: 1px solid #bababa;
  padding: 11px 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  img {
    width: 83px;
    height: 70px;
    margin-right: 22px;
  }

  span {
    font-size: 14px;
    line-height: 16px;
    color: #052942;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 450px;
    padding: 15px 25px;
    margin-right: 40px;

    img {
      width: 93px;
      height: 78px;
      margin-right: 15px;
    }

    span {
      font-size: 16px;
      line-height: 1.4;
      font-weight: bold;
    }
  }
`;

export const Link = styled.div`
  color: #1cb4d6;
  font-size: 14px;
  line-height: 17.12px;
  margin-top: 20px;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 500px;
    margin-top: 0;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const BannerWrap = styled.div`
  @media (min-width: ${DESKTOP_WITH}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 30px;
  }
`;
