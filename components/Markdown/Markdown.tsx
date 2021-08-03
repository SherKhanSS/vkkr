import MarkdownIt from 'markdown-it';
import { FC, useEffect, useMemo, useState } from 'react';

type MarkdownPropsType = {
  data: string | undefined;
};
export const Markdown: FC<MarkdownPropsType> = ({ data }) => {
  const [html, setHtml] = useState('');
  const md = useMemo(() => new MarkdownIt({ html: false }), []);

  useEffect(() => {
    data && setHtml(md.render(data));
  }, [data, md]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
