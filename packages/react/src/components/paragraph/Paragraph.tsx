import React, { forwardRef } from 'react';
import { FontSizeProps } from 'styled-system';
import { Text } from '../text';

export type ParagraphProps = FontSizeProps;

const Paragraph: React.FC<ParagraphProps> = forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <Text as="p" ref={forwardedRef} {...props}>
            {children}
        </Text>
    ),
);

Paragraph.displayName = 'Paragraph';

export { Paragraph };
