import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonElement = styled('button').attrs({ type: 'button' })`
    display: inline-block;
`;

const ButtonText = styled('div')`
    font-size: 1rem;
`;

const ButtonIcon = styled('div')`
    flex: 0 1 auto;
`;

const ButtonLoader = styled('div')`
    flex: 1 0 auto;
`;

interface ButtonProps {
    children: ReactNode;
}

const Button: React.SFC<ButtonProps> = (props) => (
    <ButtonElement {...props}>
        <ButtonIcon />
        <ButtonText>{props.children}</ButtonText>
        <ButtonLoader />
    </ButtonElement>
);

export default Button;
