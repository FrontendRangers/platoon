import React from 'react';
import { Box } from '../../primitives/box';

export type SiteLayoutProps = Record<string, unknown>;

type Props = SiteLayoutProps;

type SiteLayoutComponent = React.FC<Props>;

const SiteLayout: SiteLayoutComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default SiteLayout;
