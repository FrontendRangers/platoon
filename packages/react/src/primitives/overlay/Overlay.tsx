import React, { FC } from 'react';
import { Box, BoxProps } from '../box';

export type OverlayProps = BoxProps;

type OverlayComponent = FC<OverlayProps>;

const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backdropFilter: 'blur(5px)',
};

const Overlay: OverlayComponent = (props) => {
    const { children, sx, ...rest } = props;
    return (
        <Box sx={styles} {...rest}>
            {children}
        </Box>
    );
};

export default Overlay;
