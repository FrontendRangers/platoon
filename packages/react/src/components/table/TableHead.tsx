import React, { HTMLAttributes } from 'react';

type TableHeadProps = HTMLAttributes<HTMLTableHeaderCellElement>;

type TableHeadComponent = React.FC<TableHeadProps>;

const TableHead: TableHeadComponent = ({ children, ...props }) => (
    <th {...props}>{children}</th>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
