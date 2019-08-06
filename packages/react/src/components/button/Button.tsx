import React from 'react';
import styled from 'styled-components';
import { themed } from '../../themes/helpers';
import {
    compose,
    space,
    SpaceProps,
    borderRadius,
    BorderRadiusProps,
} from 'styled-system';

export interface ButtonProps extends SpaceProps, BorderRadiusProps {
    children?: React.ReactNode;
    icon?: Function;
    variant?: string;
    size?: string;
    disabled?: boolean;
    onClick?: Function;
    type?: 'submit' | 'reset' | 'button';
}

const Button = ({
    children,
    icon,
    variant,
    onClick,
    ...props
}: ButtonProps) => (
    <Button.Element variant={variant} {...props} onClick={() => onClick!()}>
        {!!icon && <Button.Icon>{icon()}</Button.Icon>}
        {children}
    </Button.Element>
);

Button.Element = styled.button.attrs(() => ({ role: 'button' }))<ButtonProps>`
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;

    ${themed('Button')};

    /* Overrides */
    ${compose(
        space,
        borderRadius,
    )}
`;

Button.Icon = styled.span`
    margin-right: 0.5em;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1;
`;

Button.defaultProps = {
    variant: 'default',
    size: 'md',
    type: 'button',
};

export default Button;
