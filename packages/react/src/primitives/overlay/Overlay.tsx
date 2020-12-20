import React, { FC } from 'react';
import { platoon } from '@platoon/system';

export type OverlayProps = Record<string, unknown>;

type OverlayComponent = FC<OverlayProps>;

const Overlay: OverlayComponent = ({ children, ...props }) => (
    <platoon.div {...props}>{children}</platoon.div>
);

export default Overlay;
