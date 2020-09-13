import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Box } from '../../primitives/box';
import { Label } from '../label';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

type RadioComponent = React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLInputElement>
>;

const Radio: RadioComponent = forwardRef(({ label, ...props }, ref) => (
    <Label>
        <input type="radio" ref={ref} {...props} />
        <Box>{label}</Box>
    </Label>
));

Radio.displayName = 'Radio';

export default Radio;
