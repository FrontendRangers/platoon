import React, { ComponentPropsWithRef } from 'react';
import { buttonStyles } from '@platoon/core';
import { Icon } from '../icon';

import { isBoolean } from '@platoon/utils';
import { forwardRef, platoon } from '@platoon/system';

const getStyles = (styles: any) => (props: any) => {
    const { variants, ...baseStyles } = styles;
    const stylesFromProps = Object.keys(variants).reduce((acc, variant) => {
        const propValue = props[variant];
        if (isBoolean(propValue)) {
            return propValue === true ? { ...acc, ...variants[variant] } : acc;
        }
        return { ...acc, ...variants[variant][propValue] };
    }, {});
    return { ...baseStyles, ...stylesFromProps };
};

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

const getButtonStyles = getStyles({
    color: 'neutral.0',
    fontSize: '1rem',
    lineHeight: '1',
    fontWeight: 500,
    position: 'relative',
    borderRadius: '4px',
    transition:
        'border-color .15s ease-in-out, box-shadow .15s ease-in-out, background-color .15s ease-in-out',
    '&:hover': {
        backgroundColor: 'primary.700',
    },
    '&:focus': {
        outline: 'none',
        border: '2px solid rgba(3, 102, 214, 1)',
        boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
    },
    variants: {
        intent: {
            primary: {
                backgroundColor: 'primary.500',
                '&:hover': {
                    backgroundColor: 'primary.700',
                },
            },
            secondary: {
                backgroundColor: 'secondary',
            },
        },
        variant: {
            solid: {
                border: '2px solid transparent',
            },
            outline: {
                border: '2px solid rgba(3, 102, 214, 1)',
                color: 'rgba(3, 102, 214, 1)',
                backgroundColor: 'transparent',
            },
            ghost: {
                color: 'rgba(3, 102, 214, 1)',
                border: 0,
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(3, 102, 214, 0.5)',
                },
                '&:focus': {
                    border: 0,
                },
            },
        },
        size: {
            sm: {
                p: 'xs',
            },
            md: {
                p: 'sm',
            },
            lg: {
                p: 'md',
            },
        },
        isDisabled: {
            color: 'red',
        },
    },
});

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
    const { children, isLoading, icon, ...rest } = props;

    const styles = {
        ...buttonStyles,
        ...getButtonStyles(props),
    };

    return (
        <platoon.button ref={ref} role="button" {...styles} {...rest}>
            {!!icon && <Icon name={icon} />}
            {!isLoading && children}
            {isLoading && <platoon.span>Loading</platoon.span>}
        </platoon.button>
    );
});

Button.displayName = 'Button';

Button.defaultProps = buttonDefaultProps;
