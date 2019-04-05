import { ActionType, IAction, IFetchDoneAction } from '../actions';

const initState: IAppState = {
  fetched: false,
  chunkMap: {},
  passages: [],
  questions: [],
};

const mapper: { [k in ActionType]: (state: IAppState, action: IAction) => IAppState } = {
  [ActionType.FETCH_DONE](state: IAppState, action: IFetchDoneAction) {
    return {
      fetched: true,
      chunkMap: action.chunkMap,
      passages: action.passages,
      questions: action.questions.map((q) => {
        return {
          ...q,
          selected: -1,
        };
      }),
    };
  },
};

export default function reducer(state: IAppState = initState, action: IAction) {
  const mapped = mapper[action.type];
  return mapped ? mapped(state, action) : state;
}
