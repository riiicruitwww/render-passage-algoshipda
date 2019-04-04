import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

const defaultParagraphStyle: CSSProperties = {
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    boxSizing: 'content-box',
};

interface IParagraphViewProps {
  data: IParagraph;
}

export default function({ data: paragraph }: IParagraphViewProps): JSX.Element {
  const { style, children } = paragraph;
  const modifiedStyle: CSSProperties = {
    ...defaultParagraphStyle,
    textAlign: style.text_align,
  };
  return <div style={modifiedStyle}>{children.map(rendererMapper) || '\n'}</div>;
}
