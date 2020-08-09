import React from 'react';

type Props = React.HTMLAttributes<HTMLTableCellElement>;

type TableCellComponent = React.FC<Props>;

const TableCell: TableCellComponent = ({ children, ...props }) => (
    <td {...props}>{children}</td>
);

TableCell.displayName = 'Table.Cell';

export default TableCell;
