import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

const defaultParagraphStyle: CSSProperties = {
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    boxSizing: 'content-box',
};

export default function(props: IParagraph): JSX.Element {
  const { style, children } = props;
  const modifiedStyle: CSSProperties = {
    ...defaultParagraphStyle,
    textAlign: style.text_align,
  };
  return <div style={modifiedStyle}>{children.map(rendererMapper) || '\n'}</div>;
}
