import React, { forwardRef } from 'react';
import IconButton, { IconButtonProps } from './IconButton';

export type DismissButtonProps = IconButtonProps;

type Props = DismissButtonProps;

type DismissButtonComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

const DismissButton: DismissButtonComponent = forwardRef(
    ({ ...props }, ref) => <IconButton ref={ref} icon="x" {...props} />,
);

DismissButton.displayName = 'DismissButton';

export default DismissButton;
