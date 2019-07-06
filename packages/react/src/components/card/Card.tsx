import React from 'react';
import styled from 'styled-components';
import Box from '../../primitives/box';

export interface CardProps {}

const Card = (props: CardProps) => <Card.Element {...props}></Card.Element>;

Card.Element = styled<any>(Box)`
    border: 1px solid rebeccapurple;
    padding: 16px;
`;

Card.Footer = styled<any>('div')`
    border-top: 1px solid red;
`;

Card.defaultProps = {};

export default Card;
