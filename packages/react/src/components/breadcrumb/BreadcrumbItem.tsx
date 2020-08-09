import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type BreadcrumbItemProps = Record<string, unknown>;

type Props = BreadcrumbItemProps & BoxProps;

type BreadcrumbItemComponent = React.FC<Props>;

const BreadcrumbItem: BreadcrumbItemComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default BreadcrumbItem;
