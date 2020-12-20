import React, { ComponentPropsWithoutRef, FC } from 'react';
import { platoon } from '@platoon/system';

export type TableRowProps = ComponentPropsWithoutRef<'tr'>;

const TableRow: FC<TableRowProps> = ({ children, ...props }) => (
    <platoon.tr {...props}>{children}</platoon.tr>
);

TableRow.displayName = 'Table.Row';

export default TableRow;
