import React, { TableHTMLAttributes } from 'react';

type TableRowProps = TableHTMLAttributes<HTMLTableRowElement>;

type TableRowComponent = React.FC<TableRowProps>;

const TableRow: TableRowComponent = ({ children, ...props }) => (
    <tr {...props}>{children}</tr>
);

TableRow.displayName = 'Table.Row';

export default TableRow;
