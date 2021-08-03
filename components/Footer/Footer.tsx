import { useState, FC } from 'react';
import {
  CustomFooter,
  FooterWrap,
  Contacts,
  NavigationList,
  NavigationItem,
  SubMenuList,
  SubMenuItem,
  NoLink,
  Info,
} from './styled';
import Link from 'next/link';
import navigation from '../../navigation-menu';

export const Footer: FC = () => {
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false);

  return (
    <CustomFooter>
      <FooterWrap>
        <Contacts>
          <Link href="/">
            <img src={'/img/logo.png'} alt="Логотип" />
          </Link>
          <Info>
            <span>Контакты по вопросам проведения Конкурса: e-mail -</span>
            <a href="mailto:vkkr@apkpro.ru">vkkr@apkpro.ru</a>
          </Info>
        </Contacts>
        <NavigationList>
          {navigation.map((it, i) => {
            return (
              it.name !== 'Войти' && (
                <NavigationItem
                  onMouseEnter={() => {
                    it.subMenu && setIsShowSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    it.subMenu && setIsShowSubMenu(false);
                  }}
                  key={i}
                >
                  {it.link === null ? (
                    <NoLink>
                      <span>{it.name}</span>
                    </NoLink>
                  ) : (
                    <Link href={it.link} passHref>
                      <a>
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
              )
            );
          })}
        </NavigationList>
      </FooterWrap>
    </CustomFooter>
  );
};
