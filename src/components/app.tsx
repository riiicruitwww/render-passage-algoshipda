import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import Passage from './passage';
import QuestionView from './question';
import { Dispatch } from 'redux';
import { submit } from '../actions';

interface IAppProps {
  fetched: boolean;
  chunkMap: ChunkMap;
  passages: IPassage[];
  questions: IQuestion[];
  onSubmit: () => void;
}

const defaultAppStyle: CSSProperties = {
  margin: '10px auto',
  width: '470px',
};

const defaultButtonStyle: CSSProperties = {
  width: '100%',
  height: '30px',
  float: 'right',
  backgroundColor: 'white',
  marginBottom: '10px',
};

export default connect(
  (state: IAppState) => {
    return state;
  },
  (dispatch: Dispatch) => {
    return {
      onSubmit: () => dispatch(submit()),
    };
  },
)(function App(props: IAppProps) {
  const passages = props.passages.map((p: IPassage, i: number) => <Passage key={i} data={p} />);
  const questions = props.questions.map((q: IQuestion, i: number) => {
    return <QuestionView key={i} data={q}/>;
  });

  const buttonDisabled: boolean = props.questions.length === 0
    || props.questions.some((q: IQuestion) => q.selected === -1);

  const modifiedButtonStyle: CSSProperties = {
    ...defaultButtonStyle,
    border: `1px solid ${buttonDisabled ? 'lightgrey' : 'blue'}`,
  };

  return <div style={defaultAppStyle}>
    {passages}
    {questions}
    <button onClick={props.onSubmit} disabled={buttonDisabled} style={modifiedButtonStyle}>Submit</button>
  </div>;
});
