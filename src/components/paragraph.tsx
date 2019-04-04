import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

export default function(props: IParagraph): JSX.Element {
  const style: CSSProperties = {
    wordBreak: 'break-word',
    width: '300px',
    whiteSpace: 'pre-wrap',
    lineHeight: '15px',
    boxSizing: 'content-box',
  }
  return <div style={style}>{props.children && props.children.map(rendererMapper) || '\n'}</div>;
}
