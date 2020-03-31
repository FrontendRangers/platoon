import React from 'react';
import { Box } from '../../primitives/box';

const TableCell = ({ children, ...props }) => (
    <Box as="td" {...props}>
        {children}
    </Box>
);

export { TableCell };
