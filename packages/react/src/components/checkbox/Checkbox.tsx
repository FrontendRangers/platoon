import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Box } from '../../primitives/box';
import { Label } from '../label';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

type CheckboxComponent = React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
>;

const Component: CheckboxComponent = forwardRef(({ label, ...props }, ref) => (
    <Label>
        <input type="checkbox" ref={ref} {...props} />
        <Box>{label}</Box>
    </Label>
));

Component.displayName = 'Checkbox';

export default Component;
