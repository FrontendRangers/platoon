import React from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableHead from './TableHead';

export type TableProps = Record<string, any>;

type Props = TableProps & React.HTMLAttributes<HTMLTableElement>;

interface TableComponent extends React.FC<Props> {
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
}

const Table: TableComponent = ({ children, ...props }) => (
    <table {...props}>{children}</table>
);

Table.displayName = 'Table';

Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export default Table;
