import React from 'react';

type Props = React.HTMLAttributes<HTMLTableHeaderCellElement>;

type TableHeadComponent = React.FC<Props>;

const TableHead: TableHeadComponent = ({ children, ...props }) => (
    <th {...props}>{children}</th>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
