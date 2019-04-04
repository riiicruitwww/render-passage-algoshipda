
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
}

export function fetchDone(passages: IPassage[], chunkMap: ChunkMap): IFetchDoneAction {
  return {
    type: ActionType.FETCH_DONE,
    passages,
    chunkMap,
  };
}
