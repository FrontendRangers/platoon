import React from 'react';
import { ButtonStyles } from '@frontendrangers/platoon-core';
import { MarginProps } from 'styled-system';
import { Box, BoxProps } from '../../primitives/box';
import { Icon } from '../icon';

const variants = ['intent', 'size'];

export interface ButtonProps extends MarginProps {
    /** Which icon to use */
    icon?: string;
    /** The intent of the button */
    intent?: string;
    /** The size of the button */
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
}

type Props = ButtonProps &
    BoxProps &
    React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>;

const Button: React.FC<Props> = React.forwardRef(
    (
        {
            children,
            as = 'button',
            icon,
            size = 'md',
            intent = 'default',
            type = 'button',
            onClick,
            isDisabled,
            ...props
        },
        ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>,
    ) => (
        <Box
            as={as}
            ref={ref}
            sx={ButtonStyles}
            intent={intent}
            size={size}
            vx={variants}
            tx="buttons"
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            {...props}
        >
            {!!icon && <Icon name={icon} size="sm" mr="4px"></Icon>}
            {children}
        </Box>
    ),
);

Button.displayName = 'Button';

export default Button;
