import { platoon } from '@platoon/system';
import React, { ComponentPropsWithoutRef, FC } from 'react';

export type TableCellProps = ComponentPropsWithoutRef<'td'>;

const TableCell: FC<TableCellProps> = ({ children, ...props }) => (
    <platoon.td {...props}>{children}</platoon.td>
);

TableCell.displayName = 'Table.Cell';

export default TableCell;
