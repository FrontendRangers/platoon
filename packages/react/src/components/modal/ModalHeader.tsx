import React from 'react';
import { Box } from '../../primitives/box';

const ModalHeader = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default ModalHeader;
