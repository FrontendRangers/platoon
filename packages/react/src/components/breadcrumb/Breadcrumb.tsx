import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import BreadcrumbItem from './BreadcrumbItem';

export type BreadcrumbProps = Record<string, unknown>;

type Props = BreadcrumbProps & BoxProps;

interface BreadcrumbComponent extends React.FC<Props> {
    Item: typeof BreadcrumbItem;
}

const Breadcrumb: BreadcrumbComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
