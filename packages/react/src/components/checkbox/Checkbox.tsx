import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { Label } from '../label';
import { checkboxStyles } from '@platoon/core';
import { useCheckboxGroupContext } from './CheckboxGroup';

export interface CheckboxProps extends ComponentPropsWithRef<'label'> {
    label?: string;
}

const Control = platoon('span', {
    display: 'inline-block',
    backgroundColor: 'red',
    width: '1rem',
    height: '1rem',
    'input[type=checkbox]:checked + &': {
        backgroundColor: 'blue',
    },
});

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
    ({ label, ...props }, ref) => {
        const group = useCheckboxGroupContext();
        console.log(group);
        return (
            <Label ref={ref} {...checkboxStyles}>
                <platoon.input type="checkbox" hidden {...props} />
                <Control />
                <platoon.span>{label}</platoon.span>
            </Label>
        );
    },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
