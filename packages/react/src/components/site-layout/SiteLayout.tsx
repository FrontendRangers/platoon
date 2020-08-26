import React from 'react';
import { Box } from '../../primitives/box';

export type SiteLayoutProps = Record<string, unknown>;

type SiteLayoutComponent = React.FC<SiteLayoutProps>;

const SiteLayout: SiteLayoutComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default SiteLayout;
