import React from 'react';

type Props = React.HTMLAttributes<HTMLTableRowElement>;

type TableRowComponent = React.FC<Props>;

const TableRow: TableRowComponent = ({ children, ...props }) => (
    <tr {...props}>{children}</tr>
);

TableRow.displayName = 'Table.Row';

export default TableRow;
