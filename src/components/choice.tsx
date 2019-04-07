import React from 'react';
import rendererMapper from './renderer-mapper';

interface IChoiceViewProps {
  data: IChoice;
}

export default function ChoiceView(props: IChoiceViewProps): JSX.Element {
  return <div>{props.data.children.map(rendererMapper)}</div>;
}
