import React from 'react';
import { Box } from '../../primitives/box';

const TableRow = ({ children, ...props }) => (
    <Box as="tr" {...props}>
        {children}
    </Box>
);

export { TableRow };
