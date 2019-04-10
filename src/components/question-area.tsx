import React from 'react';
import rendererMapper from './renderer-mapper';

interface IQuestionAreaViewProps {
  data: IQuestionArea;
}

export default function QuestionAreaView(props: IQuestionAreaViewProps): JSX.Element {
  const defaultQuestionAreaStyle = {
    marginBottom: '5px',
  };

  return (
    <div style={defaultQuestionAreaStyle}>
      {props.data.children.map(rendererMapper)}
    </div>
  );
}
