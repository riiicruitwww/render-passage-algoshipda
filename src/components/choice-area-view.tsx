import React from 'react';
import { connect } from 'react-redux';
import rendererMapper from './renderer-mapper';

// export default connect(
//   null,
//   null,

interface IChoiceAreaViewProps {
  data: IChoiceArea;
}

export default function ChoiceAreaView(props: IChoiceAreaViewProps) {
  return <div>
    {props.data.children.map(rendererMapper)}
  </div>;
}
