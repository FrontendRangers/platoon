import React from 'react';
import { Box } from '../../primitives/box';

const TableHead = ({ children, ...props }) => (
    <Box as="th" {...props}>
        {children}
    </Box>
);

export { TableHead };
