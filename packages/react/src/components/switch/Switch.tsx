import React, { forwardRef, Ref } from 'react';
import { platoon } from '@platoon/system';
import { Label } from '../label';

const HandleContainer = platoon('span', {
    display: 'flex',
    flexDirection: 'row',
    width: '24px',
    height: '12px',
    backgroundColor: 'whitesmoke',
    'input[type=checkbox]:checked + &': {
        flexDirection: 'row-reverse',
    },
});

const Handle = platoon('span', {
    width: '12px',
    height: '12px',
    backgroundColor: 'black',
});

export interface SwitchProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: Ref<HTMLInputElement>;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    ({ onChange, inputRef, ...props }, ref) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event);
            }
        };
        return (
            <Label ref={ref} {...props}>
                <platoon.input
                    ref={inputRef}
                    type="checkbox"
                    hidden
                    onChange={handleChange}
                />
                <HandleContainer>
                    <Handle />
                </HandleContainer>
            </Label>
        );
    },
);

Switch.displayName = 'Switch';

export default Switch;
