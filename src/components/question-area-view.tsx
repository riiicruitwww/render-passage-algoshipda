import React from 'react';
import { connect } from 'react-redux';
import rendererMapper from './renderer-mapper';
import { tsPropertySignature } from '@babel/types';

// export default connect(
//   null,
//   null,
// )(function QuestionAreaView() {

interface IQuestionAreaViewProps {
  data: IQuestionArea;
}

export default function QuestionAreaView(props: IQuestionAreaViewProps) {
  return <div>
    {props.data.children.map(rendererMapper)}
  </div>;
}
