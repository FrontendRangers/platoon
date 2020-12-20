import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { buttonStyles } from '@platoon/core';
import { Icon } from '../icon';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonIntent = 'primary' | 'secondary' | 'danger';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonOptions {
    /** Which icon to use */
    icon?: string;
    /** The intent of the button */
    intent?: ButtonIntent;
    /** The size of the button */
    size?: ButtonSize;
    /** The variant of the button */
    variant?: ButtonVariant;
    /** If true, it will disable the button */
    isDisabled?: boolean;
    /** If true, it will display a spinner */
    isLoading?: boolean;
    /** The HTML type for the button  */
    type?: 'button' | 'reset' | 'submit';
}

export type ButtonProps = ButtonOptions & ComponentPropsWithRef<'button'>;

export const buttonDefaultProps: ButtonProps = {
    intent: 'primary',
    variant: 'solid',
    size: 'md',
    icon: undefined,
    type: 'button',
    isDisabled: false,
    isLoading: false,
};

const styles = {
    backgroundColor: 'primary',
    '::before': {
        content: `""`,
        display: 'block',
        backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        width: 'calc(100% + 6px)',
        height: 'calc(100% + 6px)',
        borderRadius: 'inherit',
        zIndex: -1,
    },
    variants: {
        intent: {
            primary: {
                backgroundColor: 'primary',
            },
            secondary: {
                backgroundColor: 'secondary',
            },
        },
        variant: {
            solid: {
                border: 0,
            },
            outline: {
                border: 'button',
                backgroundColor: 'transparent',
            },
            ghost: {
                border: 0,
                backgroundColor: 'transparent',
            },
        },
        size: {
            sm: {
                p: 'sm',
            },
            md: {
                p: 'md',
            },
            lg: {
                p: 'sm',
            },
        },
    },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, isLoading, icon, ...rest } = props;

    return (
        <platoon.button
            ref={ref}
            role="button"
            {...buttonStyles}
            {...styles}
            {...rest}
        >
            {!!icon && <Icon name={icon} />}
            {!isLoading && children}
            {isLoading && <platoon.span>Loading</platoon.span>}
        </platoon.button>
    );
});

Button.displayName = 'Button';

Button.defaultProps = buttonDefaultProps;

export default Button;
