import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

const defaultPassageStyle: CSSProperties = {
  border: '1px solid lightgray',
  marginBottom: '10px',
  padding: '10px',
};

export default function Passage(props: IPassage): JSX.Element {
  return <div style={defaultPassageStyle}>{props.view_tree.children.map(rendererMapper)}</div>;
}
