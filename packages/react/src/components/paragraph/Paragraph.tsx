import React, { forwardRef } from 'react';
import { Text, TextProps } from '../text';

export type ParagraphProps = TextProps;

type ParagraphComponent = React.ForwardRefExoticComponent<
    ParagraphProps & React.RefAttributes<HTMLElement>
>;

const Paragraph: ParagraphComponent = forwardRef(
    ({ children, ...props }, ref) => (
        <Text as="p" ref={ref} {...props}>
            {children}
        </Text>
    ),
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
