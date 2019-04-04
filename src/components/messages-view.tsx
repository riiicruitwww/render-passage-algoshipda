import React from 'react';
import TableView from './table-view';

const messageDataKeys: Array<keyof IMessageData> = ['name', 'text', 'time'];

function messagesToTable({ children }: IMessages): ITable {
  const transformed: ITable = {
    table_attrs: {
      has_border: false,
      num_cols: 3,
      num_rows: children.length,
      ratio: [25, 55, 20],
    },
    name: 'table',
    children: [].concat(...children.map((msg) => {
      return messageDataKeys.map((k) => {
        return {
          name: 'cell',
          children: msg.data[k],
        };
      });
    })),
  };
  return transformed;
}

export default function MessageView(props: IMessages) {
  return <TableView {...messagesToTable(props)} />;
}
