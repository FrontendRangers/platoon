import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from './IconButton';

export type DismissButtonProps = Omit<IconButtonProps, 'icon'>;

export const DismissButton = forwardRef<HTMLButtonElement, DismissButtonProps>(
    ({ ...props }, ref) => <IconButton ref={ref} icon="x" {...props} />,
);

DismissButton.displayName = 'DismissButton';
