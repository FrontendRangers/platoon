import React from 'react';
import { Box } from '../../primitives/box';

const ModalHeader = ({ children, ...props }) => (
    <Box tx="modals.Header" {...props}>
        {children}
    </Box>
);

export default ModalHeader;
