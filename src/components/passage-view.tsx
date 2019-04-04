import React from 'react';
import rendererMapper from './renderer-mapper';

export default function Passage(props: IPassage): JSX.Element {
  return <div>{props.view_tree.children.map(rendererMapper)}</div>;
}
