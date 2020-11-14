import React from 'react';
import { Box } from '../box';

export type OverlayProps = Record<string, unknown>;

type OverlayComponent = React.FC<OverlayProps>;

const Overlay: OverlayComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default Overlay;
