import React from 'react';
import { Box, BoxProps } from '../box';

export type OverlayProps = BoxProps;

type OverlayComponent = React.FC<OverlayProps>;

const Overlay: OverlayComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default Overlay;
