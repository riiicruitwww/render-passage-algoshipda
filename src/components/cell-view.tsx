import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

interface IProps extends ICell {
  width: number;
  border: boolean;
}

const cellViewDefaultStyle: CSSProperties = {
  padding: '5px',
};

export default function CellView({width, border, children}: IProps) {
  const modifiedStyle: CSSProperties = {
    ...cellViewDefaultStyle,
    width: `${width}%`,
    border: border ? '1px solid lightgray' : '',
  };

  return <td style={modifiedStyle}> {children.map(rendererMapper)} </td>;
}
