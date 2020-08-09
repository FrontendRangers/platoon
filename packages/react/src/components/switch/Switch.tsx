import React, { forwardRef } from 'react';
import { MarginProps } from 'styled-system';
import { Label } from '../label';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs(() => ({
    type: 'checkbox',
    hidden: true,
}))({});

const HandleContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '24px',
    height: '12px',
    backgroundColor: 'whitesmoke',
    'input[type=checkbox]:checked + &': {
        flexDirection: 'row-reverse',
    },
});

const Handle = styled.div({
    width: '12px',
    height: '12px',
    backgroundColor: 'black',
});

export interface SwitchProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = SwitchProps & MarginProps;

type SwitchComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLDivElement>
>;

const Switch: SwitchComponent = forwardRef(({ onChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <Label ref={ref} {...props}>
            <HiddenCheckbox onChange={handleChange} />
            <HandleContainer>
                <Handle />
            </HandleContainer>
        </Label>
    );
});

Switch.displayName = 'Switch';

export default Switch;
