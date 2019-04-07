import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

const defaultPassageStyle: CSSProperties = {
  border: '1px solid lightgray',
  marginBottom: '10px',
  padding: '10px',
};

interface IPassageViewProps {
  data: IPassage;
}

export default function Passage({ data: passage }: IPassageViewProps): JSX.Element {
  return <div style={defaultPassageStyle}>{passage.view_tree.children.map(rendererMapper)}</div>;
}
