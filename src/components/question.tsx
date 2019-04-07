import React, { CSSProperties } from 'react';
import { rendererMapperWithParent } from './renderer-mapper';

interface IQuestionViewProps {
  data: IQuestion;
}

export default function QuestionView(props: IQuestionViewProps): JSX.Element {
  const defaultNumberStyle: CSSProperties = {
    float: 'left',
  };

  const defaultQuestionStyle: CSSProperties = {
    marginBottom: '10px',
  };

  const borderColorMap: { [k in TestState]: string } = {
    [TestState.NONE]: 'rgba(0, 0, 0, 0)',
    [TestState.O]: 'lightgreen',
    [TestState.X]: 'red',
  };

  const modifiedQuestionStyle: CSSProperties = {
    ...defaultQuestionStyle,
    border: `3px solid ${borderColorMap[props.data.testState]}`,
  };

  const rendererMapper = rendererMapperWithParent(props.data);

  const questions = props.data.view_tree.children.map(rendererMapper);
  return <div style={modifiedQuestionStyle}>
    <span style={defaultNumberStyle}>{props.data.order + 1}.&nbsp;</span>
    {questions}
  </div>;
}
