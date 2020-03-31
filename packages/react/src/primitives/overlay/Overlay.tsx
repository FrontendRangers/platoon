import React from 'react';
import { Box, BoxProps } from '../box';

export type OverlayProps = BoxProps;

const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'overlay',
};

const Overlay: React.FC<OverlayProps> = ({ children, ...props }) => (
    <Box sx={overlayStyles} {...props}>
        {children}
    </Box>
);

export default Overlay;
