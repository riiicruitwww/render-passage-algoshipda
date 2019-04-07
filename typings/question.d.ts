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

declare const enum TestState {
  NONE= 0,
  O = 1,
  X = 2,
}

declare interface IQuestion extends IQuestionData {
  selected: number;
  testState: TestState;
}

declare interface IQuestionArea extends IViewTreeItemWithParent<IQuestion> {
  name: 'question_area';
}

declare interface IChoiceArea extends IViewTreeItemWithParent<IQuestion> {
  name: 'choice_area';
}

declare interface IChoice extends IViewTreeItem {
  name: 'choice';
  number: number;  
}
