import React, { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export type IconButtonProps = ButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => <Button ref={ref} {...props} />,
);

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
    icon: 'heart',
};
