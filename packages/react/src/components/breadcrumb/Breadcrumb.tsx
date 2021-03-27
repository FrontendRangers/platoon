import { forwardRef } from '@platoon/system';
import React from 'react';
import { BoxProps, Flex } from '../../primitives';

export type BreadcrumbProps = BoxProps;

export const Breadcrumb = forwardRef<BreadcrumbProps, 'div'>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <Flex ref={ref} {...rest}>
            {children}
        </Flex>
    );
});

Breadcrumb.displayName = 'Breadcrumb';
