import React, { CSSProperties } from 'react';
import CellView from './cell-view';

const defaultTableStyle: CSSProperties = {
  width: '100%',
};

function buildTable({ table_attrs, children }: ITable): JSX.Element[] {
  const table: JSX.Element[] = [];
  const { num_rows: r, num_cols: c, ratio, has_border } = table_attrs;

  for (let i = 0; i < r; ++i) {
    const row = [];
    for (let j = 0; j < c; ++j) {
      const nextProps = {
        width: ratio[j],
        border: has_border,
        ...children[i * c + j],
      };
      row.push(<CellView key={j} {...nextProps} />);
    }
    table.push(<tr key={i}>{row}</tr>);
  }
  return table;
}

export default function TableView(props: ITable): JSX.Element {
  return <table style={defaultTableStyle}>
    <tbody>{buildTable(props)}</tbody>
  </table>;
}
