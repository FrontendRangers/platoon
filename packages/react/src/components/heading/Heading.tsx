import React, { forwardRef } from 'react';
import { Text, TextProps } from '../text';

export type HeadingProps = TextProps;

const Heading: React.FC<HeadingProps> = forwardRef(
    ({ as = 'h2', ...props }, forwardedRef) => (
        <Text as={as} ref={forwardedRef} {...props} />
    ),
);

Heading.displayName = 'Heading';

export { Heading };
