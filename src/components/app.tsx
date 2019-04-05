import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import Passage from './passage-view';
import QuestionView from './question-view';

interface IAppProps {
  fetched: boolean;
  chunkMap: ChunkMap;
  passages: IPassage[];
  questions: IQuestion[];
}

const defaultAppStyle: CSSProperties = {
  margin: '0 auto',
  width: '320px',
};

export default connect(
  (state: IAppState) => {
    return state;
  },
)(function App(props: IAppProps) {
  const passages = props.passages.map((p: IPassage, i: number) => <Passage key={i} data={p} />);
  const questions = props.questions.map((q: IQuestion, i: number) => {
    return <QuestionView key={i} data={q}/>;
  });
  return <div style={defaultAppStyle}>
    {passages}
    {questions}
  </div>;
});
