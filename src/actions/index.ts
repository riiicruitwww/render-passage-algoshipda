
export enum ActionType {
  FETCH_DONE = 'fetch-done',
  CHOICE_SELECTED = 'choice-selected',
  SUBMIT = 'submit',
}

export interface IAction {
  type: ActionType;
}

export interface IFetchDoneAction {
  type: ActionType.FETCH_DONE;
  passages: IPassage[];
  chunkMap: ChunkMap;
  questions: IQuestionData[];
}

export interface IChoiceSelectedAction {
  type: ActionType.CHOICE_SELECTED;
  id: number;
  selected: number;
}

export interface ISubmitAction {
  type: ActionType.SUBMIT;
}

export function fetchDone(
  passages: IPassage[],
  chunkMap: ChunkMap,
  questions: IQuestion[],
): IFetchDoneAction {
  return {
    type: ActionType.FETCH_DONE,
    passages,
    chunkMap,
    questions,
  };
}

export function choiceSelected(id: number, selected: number): IChoiceSelectedAction {
  return {
    type: ActionType.CHOICE_SELECTED,
    id,
    selected,
  };
}

export function submit() {
  return {
    type: ActionType.SUBMIT,
  };
}
