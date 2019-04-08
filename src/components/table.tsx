import React, { CSSProperties } from 'react';
import CellView from './cell';

const defaultTableStyle: CSSProperties = {
  width: '100%',
};

function buildTable({ table_attrs, children }: ITable): JSX.Element[] {
  const table: JSX.Element[] = [];
  const { num_rows: r, num_cols: c, ratio, has_border } = table_attrs;

  for (let i = 0; i < r; ++i) {
    const row = [];
    for (let j = 0; j < c; ++j) {
      row.push((
        <CellView
          key={j}
          width={ratio[j]}
          border={has_border}
          data={children[i * c + j]}
        />
      ));
    }
    table.push(<tr key={i}>{row}</tr>);
  }
  return table;
}

interface ITableViewProps {
  data: ITable;
}

export default function TableView({ data: tableData }: ITableViewProps): JSX.Element {
  return (
    <table style={defaultTableStyle}>
      <tbody>{buildTable(tableData)}</tbody>
    </table>
  );
}
