import React from 'react';
import { connect } from 'react-redux';
import rendererMapper from './renderer-mapper';

interface IChoiceViewProps {
  data: IChoice;
}

export default function ChoiceView(props: IChoiceViewProps) {
  return <div>{props.data.children.map(rendererMapper)}</div>;
}
