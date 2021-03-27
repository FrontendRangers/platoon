import { forwardRef } from '@platoon/system';
import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type BreadcrumbItemProps = BoxProps;

export const BreadcrumbItem = forwardRef<BreadcrumbItemProps, 'div'>(
    (props, ref) => {
        const { children, ...rest } = props;
        return (
            <Box ref={ref} {...rest}>
                {children}
            </Box>
        );
    },
);
