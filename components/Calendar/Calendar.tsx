import { FC } from 'react';
import Link from 'next/link';
import {
  Wrap,
  Title,
  MoreLink,
  Dates,
  Date,
  Number,
  Month,
  Delimiter,
  Info,
} from './styled';

export const Calendar: FC = () => {
  return (
    <section>
      <Wrap>
        <Title>КАЛЕНДАРЬ</Title>
        <Dates>
          <Date>
            <Number>1</Number>
            <Month>АПРЕЛЯ</Month>
          </Date>
          <Delimiter>-</Delimiter>
          <Date>
            <Number>31</Number>
            <Month>АВГУСТА</Month>
          </Date>
        </Dates>
        <Link href={'/'} passHref>
          <MoreLink>Этапы</MoreLink>
        </Link>
        <Info>Региональный этап</Info>
      </Wrap>
    </section>
  );
};
