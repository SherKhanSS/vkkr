/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const CustomFooter = styled.footer`
  background-color: #074b73;
`;

export const FooterWrap = styled.div`
  padding: 50px 85px 137px;
  @media (min-width: ${DESKTOP_WITH}) {
    max-width: ${MAX_WITH};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 65px 70px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${DESKTOP_WITH}) {
    max-width: 290px;
    align-items: flex-start;

    img {
      margin-left: 20px;
    }
  }
`;

export const Info = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  line-height: 25px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const NavigationList = styled.ul`
  display: none;

  @media (min-width: ${DESKTOP_WITH}) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
  }
`;

export const NoLink = styled.button`
  border: none;
  outline: none;
  padding: 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }
`;

export const NavigationItem = styled.li`
  margin-left: 30px;
  position: relative;

  a,
  button {
    color: #fff;
    text-decoration: none;
    background-color: inherit;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 600;
  }

  > a,
  > button {
    text-transform: uppercase;
  }

  :hover {
    a svg path {
      fill: #1795b1;
    }
  }

  a,
  button {
    :hover {
      color: #f6a117;
    }
  }
`;

export const SubMenuList = styled.ul`
  display: ${(props: { isShow: boolean }) =>
    props.isShow ? 'flex;' : 'none;'};
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  padding: 7px 20px;
  background-color: #e5f0f1;
  left: 0;
  top: 30px;
  box-shadow: 0 0 14px #5b5b5b;
  padding: 20px 40px;
`;

export const SubMenuItem = styled.li`
  width: max-content;

  a {
    text-decoration: none;
    color: #074b73;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 44px;
  }
`;
