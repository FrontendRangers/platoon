import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';
import { platoon } from '@platoon/system';

export const CardHeader = platoon(Box);

CardHeader.displayName = 'Card.Header';

export const CardContent = platoon(Box);

CardContent.displayName = 'Card.Footer';

export const CardFooter = platoon(Box);

CardFooter.displayName = 'Card.Footer';

export type CardProps = Record<string, any>;

const Component = forwardRef<HTMLDivElement, CardProps>(
    ({ children, ...props }, ref) => (
        <platoon.div ref={ref} {...props}>
            {children}
        </platoon.div>
    ),
);

Component.displayName = 'Card';

const Card = Object.assign(Component, {
    Header: CardHeader,
    Content: CardHeader,
    Footer: CardHeader,
});

export default Card;
