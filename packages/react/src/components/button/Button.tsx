import React, { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../../primitives/box';
import { Icon } from '../icon';

export interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    as?: any;
    /** Which icon to use */
    icon?: string;
    /** The intent of the button */
    intent?: string;
    /** The size of the button */
    size?: 'sm' | 'md' | 'lg';
    kind?: any;
    isDisabled?: boolean;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    ) => void;
}

type ButtonComponent = React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

const Button: ButtonComponent = forwardRef(
    ({ children, as = 'button', icon, onClick, isDisabled, ...props }, ref) => {
        const handleClick = (
            event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
        ) => {
            onClick?.(event);
        };
        return (
            <Box
                as={as}
                ref={ref}
                onClick={handleClick}
                disabled={isDisabled}
                {...props}
            >
                {!!icon && <Icon name={icon} size="sm" />}
                <span>{children}</span>
            </Box>
        );
    },
);

Button.displayName = 'Button';

export default Button;
