import React, { FunctionComponent } from 'react';
import ParagraphView from './paragraph-view';
import ChunkView from './chunk-view';
import TableView from './table-view';
import MessagesView from './messages-view';
import { ConnectedComponentClass } from 'react-redux';

interface IViewProps {
  data: IViewTreeItem;
}

const map: { [s: string]: FunctionComponent<IViewProps>
      | ConnectedComponentClass<any, IViewProps> } = {
    paragraph: ParagraphView,
    chunk_ref: ChunkView,
    table: TableView,
    messages: MessagesView,
};

export default function rendererMapper(item: IViewTreeItem, i: number): JSX.Element {
  const Renderer = map[item.name];
  if (!Renderer) {
    throw new Error('undefined renderer');
  }

  return <Renderer key={i} data={item}/>;
}
