import React, { forwardRef, HTMLAttributes } from 'react';
import { Text, TextProps } from '../text';

export type HeadingProps = TextProps & HTMLAttributes<HTMLHeadingElement>;

type HeadingComponent = React.ForwardRefExoticComponent<
    HeadingProps & React.RefAttributes<HTMLHeadingElement>
>;

const Heading: HeadingComponent = forwardRef(
    ({ as = 'h2', ...props }, forwardedRef) => (
        <Text as={as} ref={forwardedRef} {...props} />
    ),
);

Heading.displayName = 'Heading';

export default Heading;
