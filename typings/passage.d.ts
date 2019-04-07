declare type PassageType = 'notice' | 'form' | 'online chat';
declare type ViewTreeName = 'root' | 'paragraph'
  | 'table' | 'chunk_ref' | 'segment'
  | 'cell' | 'messages' | 'message'
  | 'question_area' | 'choice_area' | 'choice'; 
declare type RiiidFontColor = 'black'; // ??
declare type RiiidFontSize = 'm'; // ??
declare type SegmentStyle = 'bold' | 'underline';

declare interface IRStyle {
  text_align?: 'left' | 'center' | 'right',
  numbering?: string,
}

declare type IChunk = {
  [k: string]: string | number;
  eqid: string;
  id: number;
  image_en: string;
  image_kr: string;
  sound_en: string;
  text_en: string;
  text_kr: string;
}

declare type ChunkMap = {
  [key: number]: IChunk;
}

declare interface IViewTreeItem {
  name: ViewTreeName;
  children?: IViewTreeItem[];
}

declare interface IViewTreeItemWithMeta<T> extends IViewTreeItem{
  meta: T;
}

declare interface IViewTreeItemWithParent<P> extends IViewTreeItem {
  parent: P;
}

declare interface IRootViewTreeItem extends IViewTreeItem {
  name: 'root';
}

declare interface IParagraph extends IViewTreeItem {
  name: 'paragraph';
  style: IRStyle;
}

declare interface ICell extends IViewTreeItem {
  name: 'cell';
}

declare interface ITableAttrs {
  has_border: boolean;
  num_rows: number;
  num_cols: number;
  ratio: number[];
}

declare interface ITable extends IViewTreeItem {
  name: 'table';
  style?: IRStyle;
  table_attrs: ITableAttrs;
  children: ICell[];
}

declare interface IMessageData {
  name: IViewTreeItem[];
  text: IViewTreeItem[];
  time: IViewTreeItem[]; 
}

declare interface IMessage extends IViewTreeItem {
  name: 'message';
  data: IMessageData;
}

declare interface IMessages extends IViewTreeItem {
  name: 'messages',
  children: IMessage[];
}

declare interface IChunkRef extends IViewTreeItem {
  name: 'chunk_ref';
  type: string;
  chunk_id: number;
  children: ISegment[];
}

declare interface ISegmentData {
  styles: SegmentStyle[];
  begin: number;
  offset: number;
  font_color: [number, number, number];
  font_size: number;
  font_name: string;
  riiid_font_color: RiiidFontColor
  riiid_font_size: RiiidFontSize;
}

declare interface ISegment extends IViewTreeItem {
  name: 'segment';
  data: ISegmentData;
}

declare interface IPassage {
  id: number;
  passage_box_id: number;
  type_of: PassageType;
  order: number;
  view_tree: IRootViewTreeItem;
  speakers: string[];
}

declare interface INoticePassage extends IPassage {
  type_of: 'notice';
}

declare interface IFormPassage extends IPassage {
  type_of: 'form';
}

declare interface IOnlineChatPassage extends IPassage {
  type_of: 'online chat';
}
