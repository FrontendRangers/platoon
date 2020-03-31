import React from 'react';
import { Box } from '../../primitives/box';

export type SiteLayoutProps = {};

type Props = SiteLayoutProps;

const SiteLayout: React.FC<Props> = (children, ...props) => (
    <Box {...props}>{children}</Box>
);

export default SiteLayout;
