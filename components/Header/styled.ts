/* cSpell:disable */
import styled from 'styled-components';
import { DESKTOP_WITH, MAX_WITH } from '../../constants';

export const NoLink = styled.button`
  border: none;
  outline: none;
  padding: 0;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
`;

export const CustomHeader = styled.header`
  background-image: url('/img/header-mobile-background.jpeg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: ${DESKTOP_WITH}) {
    ${(props: { isInner: boolean }) =>
      props.isInner
        ? `background-image: url('/img/background-inner-desktop-image.png');
        background-position: 50% 0;`
        : `background-image: url('/img/header-desktop-background.jpeg')`};
  }
`;

export const HeaderWrap = styled.div`
  position: relative;
  max-width: ${MAX_WITH};
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 16px;

  ${(props: { isInner: boolean }) =>
    props.isInner
      ? `flex-direction: row;
    flex-wrap: wrap;
      justify-content: center;`
      : `flex-direction: column;`}

  @media (min-width: ${DESKTOP_WITH}) {
    padding: 30px 10px 40px 10px;

    ${(props: { isInner: boolean }) =>
      props.isInner ? `justify-content: space-between;` : ``};
  }

  @media (min-width: 1110px) {
    padding: 30px 70px 40px 70px;
  }
`;

export const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e5f0f1;
  padding: 9px 20px 11px;

  @media (min-width: ${DESKTOP_WITH}) {
    position: relative;
    background-color: inherit;
    padding-bottom: 0;

    ${(props: { isInner: boolean }) =>
      props.isInner ? `order: 3; align-self: center;` : `align-self: flex-end;`}
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const NavigationItem = styled.li`
  a,
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #17bcd4;
    text-decoration: none;
    background-color: inherit;

    span {
      margin-top: 3px;
    }
  }

  @media (min-width: ${DESKTOP_WITH}) {
    margin-left: 30px;
    position: relative;

    a span {
      margin-top: 2px;
    }

    :hover {
      a svg path {
        fill: #1795b1;
      }
    }

    :last-child {
      margin-left: ${(props: { isInner: boolean }) =>
        props.isInner ? '50px' : '250px;'};

      a {
        color: #f6a117;

        path {
          fill: #f6a117;
        }

        span {
          margin-left: 10px;
        }
      }

      @media (min-width: 1400px) {
        margin-left: ${(props: { isInner: boolean }) =>
          props.isInner ? '80px' : '250px;'};
      }
    }

    :first-child {
      @media (min-width: 1400px) {
        margin-left: 170px;
      }
    }

    :not(:last-child) {
      > a,
      > button {
        text-transform: uppercase;
      }
    }

    a,
    button {
      font-family: 'Roboto', sans-serif;
      color: #052942;
      font-size: 18px;
      font-weight: 600;
      flex-direction: row;

      :hover {
        color: #1795b1;
      }
    }
  }
`;

export const SubMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  position: absolute;
  padding: 7px 20px;
  background-color: #e5f0f1;
  align-items: center;
  left: 0;
  top: -37px;

  @media (max-width: ${DESKTOP_WITH}) {
    height: 37px;
    width: 100%;
    transform: ${(props: { isShow: boolean }) =>
      props.isShow ? 'translateX(0%);' : 'translateX(-100%);'};
    transition: 0.4s;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    top: 40px;
    display: ${(props: { isShow: boolean }) =>
      props.isShow ? 'flex;' : 'none;'};
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 0 14px #5b5b5b;
    padding: 20px 40px;
  }
`;

export const SubMenuItem = styled.li`
  width: 33%;

  a {
    text-decoration: none;
    color: #074b73;
    text-align: center;
  }

  @media (min-width: ${DESKTOP_WITH}) {
    width: max-content;

    a {
      font-size: 20px;
      font-weight: 400;
      line-height: 44px;
    }
  }
`;

export const LogoWrap = styled.div`
  margin-bottom: ${(props: { isInner: boolean }) =>
    props.isInner ? '0;' : '35px;'};
  width: 83px;
  height: 70px;

  @media (min-width: ${DESKTOP_WITH}) {
    ${(props: { isInner: boolean }) =>
      props.isInner
        ? `order: 1;
    width: 93px;
    height: 78px;
    align-self: center;`
        : `width: 143px;
    height: 120px;
    align-self: flex-start;
    margin-bottom: 20px;`}
  }
`;

export const Title = styled.h1`
  color: #fff;

  ${(props: { isInner: boolean }) =>
    props.isInner
      ? `font-size: 14px;
  line-height: 1.4;
  padding: 0 10px 0 20px;
  width: 65%;`
      : `font-size: 20px;
  line-height: 27px;
  padding: 0 30px 0 60px;`}

  @media (min-width: ${DESKTOP_WITH}) {
    align-self: flex-start;

    ${(props: { isInner: boolean }) =>
      props.isInner
        ? `order: 2;
    font-size: 15px;
    line-height: 20px;
    color: #053957;
    max-width: 300px;`
        : `font-size: 30px;
    line-height: 54.32px;
    max-width: 535px;
    margin: 0;`}
  }
`;

export const UsersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

  @media (min-width: ${DESKTOP_WITH}) {
    ${(props: { isInner: boolean }) =>
      props.isInner
        ? `order: 4;
    width: 100%;
    margin-top: 55px;`
        : `margin-top: 22px;`}
  }
`;

export const UsersItem = styled.li`
  width: 30%;

  :not(:last-child) {
    margin-right: 2%;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-decoration: none;

    img {
      width: 82px;
      height: 58px;
      margin-bottom: 8px;
    }
  }

  @media (min-width: ${DESKTOP_WITH}) {
    a {
      ${(props: { isInner: boolean }) =>
        props.isInner
          ? `flex-direction: row;
          font-size: 16px;`
          : `font-size: 20px;`}

      img {
        ${(props: { isInner: boolean }) =>
          props.isInner
            ? `width: 111px;
        height: 80px;`
            : `width: 147px;
        height: 105px;`}
      }
    }
  }
`;
