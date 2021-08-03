/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const Description = styled.section`
  background-color: #074b73;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  text-align: center;

  img {
    margin-bottom: 40px;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    background-color: #fff;
    background-image: url('/img/background-description.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    min-height: 460px;
    margin-top: 30px;

    img {
      width: 87px;
      height: 70px;
      margin: 0 64px 0 34px;
    }
  }
`;

export const DescriptionWrap = styled.div`
  padding: 15px 10px 20px;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: ${MAX_WITH};
    margin: 0 auto;
    display: flex;
    padding-top: 65px;
    padding-left: 20px;
  }
`;

export const IconWrap = styled.div`
  @media (min-width: ${DESKTOP_WITH}) {
    display: flex;
    min-width: 330px;
  }
`;

export const Text = styled.div`
  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 735px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    padding-right: 40px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  text-align: center;
  margin-top: 30px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
    text-align: left;
    padding-left: 20px;
    margin-top: 10px;
    min-width: 190px;
  }
`;

export const DecorativeStrip = styled.div`
  min-height: 37px;
  background-color: #e2f0f2;

  @media (min-width: ${DESKTOP_WITH}) {
    display: none;
  }
`;
