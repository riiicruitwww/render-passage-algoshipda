import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

interface IChoiceAreaViewProps {
  data: IChoiceArea;
  onChoiceSelected(id: number, i: number): () => void;
}

export default function ChoiceAreaView(props: IChoiceAreaViewProps): JSX.Element {
  const defaultRadioStyle: CSSProperties = {
    float: 'left',
  };

  const defaultChoiceWrapperStyle: CSSProperties = {
    marginBottom: '5px',
  };

  const choiceAreas = props.data.children.map((c: IChoice, i: number) => {
    return (
      <div
        style={defaultChoiceWrapperStyle}
        key={i}
      >
        <input
          checked={props.data.parent.selected === i}
          name={(props.data.parent.id).toString()}
          style={defaultRadioStyle}
          type="radio"
          onChange={props.onChoiceSelected(props.data.parent.id, i)}
        />{rendererMapper(c, i)}
      </div>
    );
  });
  return <div>{choiceAreas}</div>;
}
