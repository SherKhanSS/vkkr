import { useEffect, useState, FC } from 'react';
import Link from 'next/link';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  CustomHeader,
  HeaderWrap,
  Navigation,
  NavigationList,
  NavigationItem,
  Title,
  UsersList,
  UsersItem,
  LogoWrap,
  SubMenuList,
  SubMenuItem,
  NoLink,
} from './styled';
import navigation from '../../navigation-menu';
import roles from './role-menu';
import { HeaderProps } from './types';

const DESKTOP_WIDTH = 1024;

export const Header: FC<HeaderProps> = ({ isInner }) => {
  const { width } = useWindowDimensions();
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false);

  // const navigation = data.general.navBar.menuLinkList;

  useEffect(() => {
    const isDesktop = width === null ? false : width > DESKTOP_WIDTH;
    setIsDesktop(isDesktop);
    setIsShowSubMenu(false);
  }, [width]);

  return (
    <CustomHeader isInner={isInner}>
      <HeaderWrap isInner={isInner}>
        <Navigation isInner={isInner}>
          <NavigationList>
            {navigation.map((it, i) => {
              return (
                <NavigationItem
                  isInner={isInner}
                  onMouseEnter={() => {
                    isDesktop && it.subMenu && setIsShowSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    isDesktop && it.subMenu && setIsShowSubMenu(false);
                  }}
                  key={i}
                >
                  {it.link === null ? (
                    <NoLink
                      onClick={() => {
                        !isDesktop && setIsShowSubMenu(!isShowSubMenu);
                      }}
                    >
                      {!isDesktop && it.icon}
                      <span>{it.name}</span>
                    </NoLink>
                  ) : (
                    <Link href={it.link} passHref>
                      <a>
                        {!isDesktop && it.icon}
                        {isDesktop && it.name === 'Войти' && it.icon}
                        <span>{it.name}</span>
                      </a>
                    </Link>
                  )}
                  {it.subMenu && (
                    <SubMenuList isShow={isShowSubMenu}>
                      {it.subMenu.map((it, i) => {
                        return (
                          <SubMenuItem key={i}>
                            <Link href={it.link} passHref>
                              <a>{it.name}</a>
                            </Link>
                          </SubMenuItem>
                        );
                      })}
                    </SubMenuList>
                  )}
                </NavigationItem>
              );
            })}
          </NavigationList>
        </Navigation>
        <LogoWrap isInner={isInner}>
          <Link href="/">
            <img
              src={isDesktop ? '/img/logo-big.svg' : '/img/logo.png'}
              alt="Логотип"
            />
          </Link>
        </LogoWrap>
        <Title isInner={isInner}>
          ВСЕРОССИЙСКИЙ КОНКУРС СРЕДИ КЛАССНЫХ РУКОВОДИТЕЛЕЙ НА ЛУЧШИЕ
          МЕТОДИЧЕСКИЕ РАЗРАБОТКИ ВОСПИТАТЕЛЬНЫХ МЕРОПРИЯТИЙ
        </Title>
        <UsersList isInner={isInner}>
          {roles.map((it, i) => {
            return (
              <UsersItem isInner={isInner} key={i}>
                <Link href={it.link} passHref>
                  <a>
                    <img src={it.icon} alt={it.name} />
                    <span>{it.name}</span>
                  </a>
                </Link>
              </UsersItem>
            );
          })}
        </UsersList>
      </HeaderWrap>
    </CustomHeader>
  );
};
