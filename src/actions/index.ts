
export enum ActionType {
  FETCH_DONE = 'fetch-done',
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
