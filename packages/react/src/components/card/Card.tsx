import React, { forwardRef, Ref } from 'react';
import { Box, BoxProps } from '../../primitives/box';

const headerBaseStyles = {
    flex: '0 1 auto',
};

const CardHeader = ({ ...props }) => (
    <Box sx={headerBaseStyles} tx="cards.Header" {...props}></Box>
);

CardHeader.displayName = 'Card.Header';

const contentBaseStyles = {
    flex: '1 1 auto',
};

const CardContent = ({ ...props }) => (
    <Box sx={contentBaseStyles} tx="cards.Content" {...props}></Box>
);

CardContent.displayName = 'Card.Footer';

const footerBaseStyles = {
    flex: '0 1 auto',
};

const CardFooter = ({ ...props }) => (
    <Box sx={footerBaseStyles} tx="cards.Footer" {...props}></Box>
);

CardFooter.displayName = 'Card.Footer';

export interface CardProps extends BoxProps {
    variant?: string;
}

type Props = CardProps & React.HTMLAttributes<HTMLDivElement>;

const rootStyles = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
};

const Card: React.FC<Props> = forwardRef(
    ({ children, variant = 'default', ...props }, ref: Ref<HTMLDivElement>) => (
        <Box
            ref={ref}
            variant={variant}
            vx={['variant']}
            sx={rootStyles}
            tx="cards"
            {...props}
        >
            {children}
        </Box>
    ),
);

Card.displayName = 'Card';

export { Card, CardHeader, CardContent, CardFooter };
