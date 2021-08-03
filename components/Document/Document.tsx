import { FC } from 'react';
import Link from 'next/link';
import { Wrap, Name, Type, CustomLink } from './styled';
import { DocumentProps } from './types';
import DownloadIcon from '../Icons/DownloadIcon';

export const Document: FC<DocumentProps> = ({ document }) => {
  return (
    <Wrap>
      <Name>{document.name}</Name>
      <Type>
        Документ / {document.type}, {document.size}
      </Type>
      <Link href={document.src} passHref>
        <CustomLink>
          <DownloadIcon />
          <span>Скачать</span>
        </CustomLink>
      </Link>
    </Wrap>
  );
};
