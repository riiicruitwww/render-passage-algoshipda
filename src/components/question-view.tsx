import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

interface IQuestionViewProps {
  data: IQuestion;
}

export default function QuestionView(props: IQuestionViewProps) {
  return <div style={{ border: '1px solid black' }}>
    {props.data.view_tree.children.map(rendererMapper)}
  </div>;
}
