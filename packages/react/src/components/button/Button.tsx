import React from 'react';
import styled from 'styled-components';
import { getTheme } from '../../themes/helpers';
import { space, SpaceProps } from 'styled-system';

export interface ButtonProps extends SpaceProps {
    children?: React.ReactNode;
    icon?: Function;
}

const Button = ({ children, icon, ...props }: ButtonProps) => (
    <Button.Element {...props}>
        {!!icon && <Button.Icon>{icon()}</Button.Icon>}
        {children}
    </Button.Element>
);

Button.Element = styled.button`
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;

    /* To theme */
    padding: 0 0.8em;
    background-color: #e5e5e5;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;

    ${getTheme('Button')};

    /* Overrides */
    ${space}
`;

Button.Icon = styled.span`
    margin-right: 0.5em;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1;
`;

export default Button;
