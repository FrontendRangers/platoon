import React, { ComponentPropsWithoutRef, FC } from 'react';
import { platoon } from '@platoon/system';

export type TableHeadProps = ComponentPropsWithoutRef<'thead'>;

const TableHead: FC<TableHeadProps> = ({ children, ...props }) => (
    <platoon.thead {...props}>{children}</platoon.thead>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
