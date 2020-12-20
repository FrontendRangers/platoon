import React, { ComponentPropsWithoutRef } from 'react';
import { Flex } from '../../primitives';
import BreadcrumbItem from './BreadcrumbItem';

export type BreadcrumbProps = ComponentPropsWithoutRef<'div'>;

interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
}

const Breadcrumb: BreadcrumbComponent = ({ children, ...props }) => (
    <Flex {...props}>{children}</Flex>
);

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
