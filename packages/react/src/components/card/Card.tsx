import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { forwardRef, platoon } from '@platoon/system';

export const CardHeader = platoon(Box);

CardHeader.displayName = 'Card.Header';

export const CardContent = platoon(Box);

CardContent.displayName = 'Card.Footer';

export const CardFooter = platoon(Box);

CardFooter.displayName = 'Card.Footer';

export type CardProps = BoxProps;

const Component = forwardRef<CardProps, 'div'>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <platoon.div ref={ref} {...rest}>
            {children}
        </platoon.div>
    );
});

Component.displayName = 'Card';

const Card = Object.assign(Component, {
    Header: CardHeader,
    Content: CardHeader,
    Footer: CardHeader,
});

export default Card;
