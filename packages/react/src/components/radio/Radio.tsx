import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { Label } from '../label';

export interface RadioProps extends ComponentPropsWithRef<'label'> {
    label?: string;
}

const Control = platoon('span', {
    display: 'inline-block',
    backgroundColor: 'red',
    width: '1rem',
    height: '1rem',
    borderRadius: '100em',
    'input[type=radio]:checked + &': {
        backgroundColor: 'blue',
    },
});

const Radio = forwardRef<HTMLLabelElement, RadioProps>(
    ({ label, ...props }, ref) => (
        <Label ref={ref}>
            <platoon.input type="radio" hidden {...props} />
            <Control />
            <platoon.span>{label}</platoon.span>
        </Label>
    ),
);

Radio.displayName = 'Radio';

export default Radio;
