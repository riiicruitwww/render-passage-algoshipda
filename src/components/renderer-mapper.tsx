import React, { FunctionComponent } from 'react';
import ParagraphComponent from './paragraph';
import ChunkRefView from './chunk-ref';

const map: { [s: string]: FunctionComponent; } = {
    paragraph: ParagraphComponent,
    chunk_ref: ChunkRefView,
};

export default function rendererMapper(item: IViewTreeItem, i: number): JSX.Element {
  const Renderer = map[item.name];
  return <Renderer key={i} {...item}/>;
}
