import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TextProps = BoxProps;

const Text: React.FC<TextProps> = forwardRef(
    ({ children, as = 'span', ...props }, ref) => (
        <Box as={as} ref={ref} tx="textStyles" {...props}>
            {children}
        </Box>
    ),
);

Text.displayName = 'Text';

export { Text };
