import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Box, MiddleLeft, MiddleRight } from '../../primitives/box/box';

interface ButtonProps {
    children: ReactNode;
    variant?: string;
    size?: string;
    icon?: JSX.Element;
    iconPosition?: string;
    isLoading?: boolean;
    href?: string;
}

// Styles

const ButtonStyles = css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rebeccapurple;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    line-height: 24px;

    &:hover {
        background-color: purple;
    }
`;

const Component = styled<any>('button').attrs({ type: 'button' })`
    cursor: pointer;
    border: none;
    text-align: center;
    white-space: nowrap;
    padding: 0;
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;

    ${ButtonStyles};
`;

// Structure

const Container = styled<any>(Box)`
    ${({ iconPosition }) => {
        if (iconPosition === 'right') {
            return css`
                grid-template-columns: auto auto 1fr;
            `;
        } else {
            return css`
                grid-template-columns: 1fr auto auto;
            `;
        }
    }}

    grid-template-rows: 1fr auto 1fr;
    align-items: center;
`;

const Label = styled<any>('div')``;

const Icon = styled<any>('div')`
    display: flex;
    justify-content: flex-end;
    ${({ iconPosition }) =>
        iconPosition === 'right'
            ? css`
                  padding-left: 0.5em;
              `
            : css`
                  padding-right: 0.5em;
              `}
`;

const Loader = styled<any>('div')`
    flex: 1 0 auto;
`;

// Rendered component

const Button: React.SFC<ButtonProps> = ({
    children,
    icon,
    iconPosition,
    isLoading,
    ...props
}) => {
    const IconPosition = iconPosition === 'right' ? MiddleRight : MiddleLeft;
    const Tag = !!props.href ? 'a' : 'button';
    return (
        <Component as={Tag} {...props}>
            <Container iconPosition={iconPosition}>
                {icon && (
                    <Icon as={IconPosition} iconPosition={iconPosition}>
                        {icon}
                    </Icon>
                )}
                <Label>{children}</Label>
                {isLoading && <Loader>Loading...</Loader>}
            </Container>
        </Component>
    );
};

export default Button;
