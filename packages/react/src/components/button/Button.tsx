import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '@frontendrangers/platoon-core';
import { themed } from '../../themes/helpers';
import {
    compose,
    space,
    SpaceProps,
    borderRadius,
    BorderRadiusProps,
} from 'styled-system';
import { Box } from '../../primitives/box';
import { Icon } from '../icon';

export interface ButtonProps extends SpaceProps, BorderRadiusProps {
    children?: React.ReactNode;
    icon?: string;
    variant?: string;
    size?: string;
    disabled?: boolean;
    onClick?: Function;
    type?: 'submit' | 'reset' | 'button';
    theme?: any;
}

const ButtonElement = styled<any>(Box).attrs(() => ({
    as: 'button',
    role: 'button',
}))<ButtonProps>`
    ${ButtonStyles}
    ${themed('Button')}

    /* Overrides */
    ${compose(
        space,
        borderRadius,
    )}
`;

const ButtonIcon = styled.span`

    margin-right: 0.5em;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1;
`;

const Button = React.forwardRef(
    (
        {
            children,
            icon,
            size,
            variant,
            type,
            onClick = () => {},
            ...props
        }: ButtonProps,
        ref: any,
    ): any => {
        // TODO: Create an HOC to optimize this
        // variant = variant
        //     ? variant
        //     : props.theme.components.Button.defaultProps.variant || 'default';
        // size = size
        //     ? size
        //     : props.theme.components.Button.defaultProps.size || 'md';
        // type = type
        //     ? type
        //     : props.theme.components.Button.defaultProps.type || 'button';

        return (
            <ButtonElement
                ref={ref}
                variant={variant}
                size={size}
                type={type}
                {...props}
                onClick={() => onClick()}
            >
                {!!icon && (
                    <ButtonIcon>
                        <Icon name={icon}></Icon>
                    </ButtonIcon>
                )}
                {children}
            </ButtonElement>
        );
    },
);

Button.displayName = 'Button';

export { Button };
