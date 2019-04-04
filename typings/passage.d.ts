declare type PassageType = 'notice' | 'form' | 'online chat';
declare type ViewTreeName = 'root' | 'paragraph' | 'table'
  | 'chunk_ref' | 'segment' | 'cell' | 'message';
declare type RiiidFontColor = 'black';
declare type RiiidFontSize = 'm';

declare interface IRStyle {
  text_align?: 'left' | 'center' | 'right',
  numbering?: string,

}

declare type ChunkMap = {
  [key: number]: IChunkRef;
}

declare interface IViewTreeItem {
  name: ViewTreeName;
  children?: IViewTreeItem[];
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
  style: IRStyle;
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

declare interface IChunkRef extends IViewTreeItem {
  name: 'chunk_ref';
  type: 'text_en';
  chunk_id: number;
  children: ISegment[];
}

declare interface ISegmentData {
  styles: string[];
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
