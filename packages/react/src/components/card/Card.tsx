import React from 'react';
import styled from 'styled-components';
import { Box } from '../../primitives/box';

export interface CardProps {
    children: any;
}

const CardComponent = styled<any>(Box)`
    border: 1px solid rebeccapurple;
    padding: 16px;
`;

const Header = styled<any>('div')`
    border-bottom: 1px solid red;
`;

const Footer = styled<any>('div')`
    border-top: 1px solid red;
`;

const Card = ({ children, ...props }: CardProps) => (
    <CardComponent {...props}>{children}</CardComponent>
);

Card.Header = Header;
Card.Footer = Footer;

Card.defaultProps = {};

export { Card };
