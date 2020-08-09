import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';

export type IconButtonProps = ButtonProps;

type IconButtonComponent = React.ForwardRefExoticComponent<
    IconButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

const IconButton: IconButtonComponent = forwardRef(
    ({ icon = 'x', ...props }, ref) => (
        <Button ref={ref} icon={icon} {...props} />
    ),
);

IconButton.displayName = 'IconButton';

export default IconButton;
