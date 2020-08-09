import React from 'react';
import { Box, BoxProps } from '../box';
import { CSSObject } from '@styled-system/css';

export type OverlayProps = BoxProps;

const overlayStyles: CSSObject = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'overlay',
    zIndex: 1000,
};

type OverlayComponent = React.FC<OverlayProps>;

const Overlay: OverlayComponent = ({ children, ...props }) => (
    <Box sx={overlayStyles} {...props}>
        {children}
    </Box>
);

export default Overlay;
