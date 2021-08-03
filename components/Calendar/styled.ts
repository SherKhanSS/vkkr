import styled from 'styled-components';
import { DESKTOP_WITH } from '../../constants';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 10px;

  @media (min-width: ${DESKTOP_WITH}) {
    padding-top: 15px;
  }
`;

export const Dates = styled.div`
  display: flex;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Number = styled.span`
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  color: #f6a117;
`;

export const Month = styled.span`
  display: inline-block;
  background: #f6a117;
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  padding: 4px 14px 2px;
`;

export const Delimiter = styled.div`
  color: #f6a117;
  font-size: 72px;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  color: #052c47;
  text-align: center;
  margin-bottom: 25px;

  @media (min-width: ${DESKTOP_WITH}) {
    font-size: 30px;
  }
`;

export const MoreLink = styled.a`
  display: inline-block;
  border: 1px solid #b7c5d8;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #17bcd4;
  text-decoration: none;
  text-transform: uppercase;
  padding: 3px 8px 1px;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (min-width: ${DESKTOP_WITH}) {
    :hover {
      box-shadow: -2px 2px 8px -4px rgb(0 0 0 / 50);
    }
  }
`;

export const Info = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #052942;
`;
