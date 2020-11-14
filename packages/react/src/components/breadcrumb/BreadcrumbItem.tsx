import React from 'react';
import { Box } from '../../primitives/box';

export type BreadcrumbProps = Record<string, unknown>;

type BreadcrumbItemComponent = React.FC<BreadcrumbProps>;

const BreadcrumbItem: BreadcrumbItemComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default BreadcrumbItem;
