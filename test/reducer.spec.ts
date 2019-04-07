import { readFileSync } from 'fs';
import * as path from 'path';
import { fetchDone, choiceSelected, submit } from '../src/actions';

import reducer from '../src/reducers';
const data: {
  package: {
    question_passage_box: {
      passages: IPassage[],
    },
    chunk_map: ChunkMap,
    questions: IQuestion[],
  },
} = JSON.parse(readFileSync(path.resolve(__dirname, '../task_container.json'), 'utf-8'));

function prepareState(): IAppState {
  const initState: IAppState = {
    fetched: false,
    chunkMap: {},
    passages: [],
    questions: [],
  };
  return reducer(initState, fetchDone(
    data.package.question_passage_box.passages,
    data.package.chunk_map,
    data.package.questions,
  ));
}

describe('reducer', () => {
  test('fetch done',  () => {
    const afterFetchDone: IAppState = prepareState();
    expect(afterFetchDone.passages.length).toBe(3);
    expect(afterFetchDone.questions.length).toBe(5);
    expect(afterFetchDone.fetched).toBe(true);
    expect(Object.keys(afterFetchDone.chunkMap).length).toBeGreaterThan(0);
  });

  test('choice selected', () => {
    const state: IAppState = prepareState();
    expect(state.questions[0].selected).toBe(-1);
    let afterChoiceSelected = reducer(state, choiceSelected(state.questions[0].id, 3));
    expect(afterChoiceSelected.questions[0].selected).toBe(3);

    afterChoiceSelected = reducer(afterChoiceSelected, choiceSelected(state.questions[2].id, 1));
    expect(afterChoiceSelected.questions[2].selected).toBe(1);
    afterChoiceSelected = reducer(afterChoiceSelected, choiceSelected(state.questions[0].id, 0));
    expect(afterChoiceSelected.questions[0].selected).toBe(0);
  });

  test('submit', () => {
    let state: IAppState = prepareState();
    expect(state.questions[0].testState).toBe(TestState.NONE);
    expect(state.questions[1].testState).toBe(TestState.NONE);
    expect(state.questions[2].testState).toBe(TestState.NONE);
    expect(state.questions[3].testState).toBe(TestState.NONE);
    expect(state.questions[4].testState).toBe(TestState.NONE);

    state = reducer(state, choiceSelected(state.questions[0].id, 2));
    state = reducer(state, choiceSelected(state.questions[1].id, 3));
    state = reducer(state, choiceSelected(state.questions[2].id, 0));
    state = reducer(state, choiceSelected(state.questions[3].id, 2));
    state = reducer(state, choiceSelected(state.questions[4].id, 1));
    state = reducer(state, submit());

    expect(state.questions[0].testState).toBe(TestState.O);
    expect(state.questions[1].testState).toBe(TestState.O);
    expect(state.questions[2].testState).toBe(TestState.O);
    expect(state.questions[3].testState).toBe(TestState.O);
    expect(state.questions[4].testState).toBe(TestState.O);

    state = reducer(state, choiceSelected(state.questions[1].id, 2));
    expect(state.questions[1].testState).toBe(TestState.NONE);
    state = reducer(state, submit());

    expect(state.questions[0].testState).toBe(TestState.O);
    expect(state.questions[1].testState).toBe(TestState.X);
    expect(state.questions[2].testState).toBe(TestState.O);
    expect(state.questions[3].testState).toBe(TestState.O);
    expect(state.questions[4].testState).toBe(TestState.O);
  });
});
