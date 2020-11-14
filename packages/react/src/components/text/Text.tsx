import React, { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../../primitives/box';

export interface TextProps extends HTMLAttributes<Element> {
    as?: any;
}

type TextComponent = React.ForwardRefExoticComponent<
    TextProps &
        React.RefAttributes<
            HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement
        >
>;

const Text: TextComponent = forwardRef(
    ({ children, as = 'span', ...props }, ref) => (
        <Box as={as} ref={ref} {...props}>
            {children}
        </Box>
    ),
);

Text.displayName = 'Text';

export default Text;
