import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TableProps = BoxProps;

type Props = TableProps;

const Table: React.FC<Props> = ({ children, ...props }) => (
    <Box as="table" {...props}>
        {children}
    </Box>
);

export { Table };
