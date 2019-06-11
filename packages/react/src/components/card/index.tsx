import React from 'react';
import styled from 'styled-components';
import { Box, Bottom } from '../../primitives/box/box';

const Component = styled<any>(Box)`
    border: 1px solid rebeccapurple;
    padding: 16px;
`;

const Footer = styled<any>(Bottom)`
    border-top: 1px solid red;
`;

function Card(props: any) {
    return <Component {...props} />;
}

Card.Footer = Footer;

export default Card;
