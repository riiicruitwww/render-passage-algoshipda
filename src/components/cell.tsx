import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

interface ICellViewProps {
  cell: ICell;
  width: number;
  border: boolean;
}

const cellViewDefaultStyle: CSSProperties = {
  padding: '5px',
};

export default function CellView({width, border, cell}: ICellViewProps) {
  const modifiedStyle: CSSProperties = {
    ...cellViewDefaultStyle,
    width: `${width}%`,
    border: border ? '1px solid lightgray' : '',
  };

  return <td style={modifiedStyle}> {cell.children.map(rendererMapper)} </td>;
}
