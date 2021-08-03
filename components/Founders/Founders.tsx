/* cSpell:disable */
import { FC } from 'react';
import { Title, FoundersList, FoundersItem } from './styled';

const founders = [
  {
    name: 'Минпросвещения России',
    imgSrc: '/img/minpros.png',
    link: 'https://edu.gov.ru/',
  },
  {
    name: 'ФГАОУ ДПО Академия Минпросвещения России',
    imgSrc: '/img/academy.png',
    link: 'https://apkpro.ru/',
  },
  {
    name: 'электронный периодический журнал',
    imgSrc: '/img/vestnik.png',
    link: 'https://vestnik.edu.ru/',
    isShowName: false,
  },
  {
    name: 'федеральный портал «российское образование»',
    imgSrc: '/img/rosobr.png',
    link: 'http://www.edu.ru/',
  },
];

export const Founders: FC = () => {
  return (
    <section>
      <Title>УЧРЕДИТЕЛИ И ОРГАНИЗАТОРЫ</Title>
      <FoundersList>
        {founders.map((it, i) => {
          return (
            <FoundersItem key={i}>
              <a href={it.link}>
                <img src={it.imgSrc} alt={it.name} />
                {it.isShowName !== false && <span>{it.name}</span>}
              </a>
            </FoundersItem>
          );
        })}
      </FoundersList>
    </section>
  );
};
