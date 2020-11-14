import React, { TableHTMLAttributes } from 'react';

type TableCellProps = TableHTMLAttributes<HTMLTableCellElement>;

type TableCellComponent = React.FC<TableCellProps>;

const TableCell: TableCellComponent = ({ children, ...props }) => (
    <td {...props}>{children}</td>
);

TableCell.displayName = 'Table.Cell';

export default TableCell;
