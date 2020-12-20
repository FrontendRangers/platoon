import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { platoon } from '@platoon/system';

export type TableProps = ComponentPropsWithoutRef<'table'>;

const Component = forwardRef<HTMLTableElement, TableProps>(
    ({ children, ...props }) => (
        <platoon.table {...props}>{children}</platoon.table>
    ),
);

Component.displayName = 'Table';

const Table = Object.assign(Component, {
    Row: TableRow,
    Head: TableHead,
    Cell: TableCell,
});

export default Table;
