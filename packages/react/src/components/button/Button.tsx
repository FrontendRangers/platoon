import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Icon } from '../icon';

export interface ButtonProps {
    as?: string;
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

type Props = ButtonProps &
    BoxProps &
    React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

type ButtonComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

const Button: ButtonComponent = forwardRef(
    ({ children, as = 'button', icon, onClick, isDisabled, ...props }, ref) => {
        const handleClick = (
            event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
        ) => {
            if (onClick) {
                onClick(event);
            }
        };
        return (
            <Box
                as={as}
                ref={ref}
                onClick={handleClick}
                disabled={isDisabled}
                {...props}
            >
                {!!icon && <Icon name={icon} size="sm" mr="4px" />}
                <span>{children}</span>
            </Box>
        );
    },
);

Button.displayName = 'Button';

export default Button;
