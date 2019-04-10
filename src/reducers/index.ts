import { ActionType, IAction, IFetchDoneAction, IChoiceSelectedAction, ISubmitAction } from '../actions';

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
      questions: action.questions.map((q: IQuestion) => {
        return {
          ...q,
          selected: -1,
          testState: TestState.NONE,
        };
      }),
    };
  },
  [ActionType.CHOICE_SELECTED](state: IAppState, action: IChoiceSelectedAction) {
    return {
      ...state,
      questions: state.questions.map((q: IQuestion) => {
        if (q.id === action.id) {
          return {
            ...q,
            selected: action.selected,
            testState: TestState.NONE,
          };
        }
        return q;
      }),
    };
  },
  [ActionType.SUBMIT](state: IAppState, action: ISubmitAction) {
    return {
      ...state,
      questions: state.questions.map((q: IQuestion) => {
        return {
          ...q,
          testState: q.correct_answer.charCodeAt(0) - 'a'.charCodeAt(0) === q.selected ? TestState.O : TestState.X,
        };
      }),
    };
  },
};

export default function reducer(state: IAppState = initState, action: IAction) {
  const mapped = mapper[action.type];
  return mapped ? mapped(state, action) : state;
}
