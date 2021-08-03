import { FC } from 'react';
import { Wrap, Name, BannerContainer, Link, BannerWrap } from './styled';
import { BannerProps } from './types';

export const Banner: FC<BannerProps> = ({ bannerText, bannerLink }) => {
  return (
    <Wrap>
      <Name>
        Скопируйте код баннера и разместите его на Вашем сайте или блоге:
      </Name>
      <BannerWrap>
        <BannerContainer>
          <img src={'/img/logo.png'} alt="Логотип" />
          <span>{bannerText}</span>
        </BannerContainer>
        <Link>{bannerLink}</Link>
      </BannerWrap>
    </Wrap>
  );
};
