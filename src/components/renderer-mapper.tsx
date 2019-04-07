import React, { FunctionComponent } from 'react';
import ParagraphView from './paragraph';
import ChunkView from './chunk';
import TableView from './table';
import MessagesView from './messages';
import QuestionAreaView from './question-area';
import ChoiceAreaView from './choice-area';
import { ConnectedComponentClass } from 'react-redux';
import ChoiceView from './choice';

interface IViewProps {
  data: IViewTreeItem;
}

type IViewTreeItemRenderer<T extends IViewTreeItem> = (item: T, i: string | number) => JSX.Element;

const map: { [s: string]: FunctionComponent<IViewProps> | ConnectedComponentClass<any, Partial<IViewProps>> } = {
  paragraph: ParagraphView,
  chunk_ref: ChunkView,
  table: TableView,
  messages: MessagesView,
  question_area: QuestionAreaView,
  choice_area: ChoiceAreaView,
  choice: ChoiceView,
};

export default function rendererMapper<T extends IViewTreeItem>(item: T, i: string | number): JSX.Element {
  const Renderer = map[item.name];
  if (!Renderer) {
    throw new Error('undefined renderer');
  }

  return <Renderer key={i} data={item}/>;
}

export function rendererMapperWithParent<P>(parent: P): IViewTreeItemRenderer<IViewTreeItemWithParent<P>> {
  return (item: IViewTreeItem, i: string | number): JSX.Element => {
    return rendererMapper<IViewTreeItemWithParent<P>>({
      ...item,
      parent,
    }, i);
  };
}

export function rendererMapperWithMeta<T>(meta: T): IViewTreeItemRenderer<IViewTreeItemWithMeta<T>> {
  return (item: IViewTreeItem, i: string | number): JSX.Element => {
    return rendererMapper<IViewTreeItemWithMeta<T>>({
      ...item,
      meta,
    }, i);
  };
}
