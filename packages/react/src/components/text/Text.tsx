import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TextProps = BoxProps;

type TextComponent = React.ForwardRefExoticComponent<
    TextProps &
        React.RefAttributes<
            HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement
        >
>;

const Text: TextComponent = forwardRef(
    ({ children, as = 'span', ...props }, ref) => (
        <Box as={as} ref={ref} tx="textStyles" {...props}>
            {children}
        </Box>
    ),
);

Text.displayName = 'Text';

export default Text;
