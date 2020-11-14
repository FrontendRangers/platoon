import React from 'react';
import { Box } from '../../primitives/box';
import BreadcrumbItem from './BreadcrumbItem';

export type BreadcrumbProps = Record<string, unknown>;

interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
}

const Breadcrumb: BreadcrumbComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
