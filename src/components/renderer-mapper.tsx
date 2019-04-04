import React, { FunctionComponent } from 'react';
import ParagraphComponent from './paragraph-view';
import ChunkView from './chunk-view';
import TableView from './table-view';
import MessageView from './messages-view';
import { ConnectedComponentClass } from 'react-redux';

const map: { [s: string]: FunctionComponent | ConnectedComponentClass<any, any> } = {
    paragraph: ParagraphComponent,
    chunk_ref: ChunkView,
    table: TableView,
    messages: MessageView,
};

export default function rendererMapper(item: IViewTreeItem, i: number): JSX.Element {
  const Renderer = map[item.name];
  if (!Renderer) {
    throw new Error('undefined renderer');
  }
  return <Renderer key={i} {...item}/>;
}
