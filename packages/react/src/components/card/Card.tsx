import React, { HTMLAttributes } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import styled from 'styled-components';

const CardHeader = styled.div({});

CardHeader.displayName = 'Card.Header';

const CardContent = styled.div({});

CardContent.displayName = 'Card.Footer';

const CardFooter = styled.div({});

CardFooter.displayName = 'Card.Footer';

export type CardProps = BoxProps & HTMLAttributes<HTMLDivElement>;

interface CardComponent extends React.FC<CardProps> {
    Header: typeof CardHeader;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
}

const Card: CardComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

Card.displayName = 'Card';

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
