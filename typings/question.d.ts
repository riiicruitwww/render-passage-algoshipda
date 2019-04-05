
declare interface IQuestionData {
  id: number;
  pack_type: string;
  passage_box_id: number;
  raw_fbid: string;
  correct_answer: string;
  order: number;
  pack_id: number;
  view_tree: IRootViewTreeItem;
}

declare interface IQuestion extends IQuestionData {
  selected: number;
}


declare interface IQuestionArea extends IViewTreeItem {
  name: 'question_area';
}

declare interface IChoiceArea extends IViewTreeItem {
  name: 'choice_area';
}

declare interface IChoice extends IViewTreeItem {
  name: 'choice';
  number: number;  
}
