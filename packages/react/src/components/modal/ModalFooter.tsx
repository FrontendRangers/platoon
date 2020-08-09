import React from 'react';
import { Box } from '../../primitives/box';

const ModalFooter = ({ children, ...props }) => (
    <Box tx="modals.Footer" {...props}>
        {children}
    </Box>
);

export default ModalFooter;
