import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';
import { Label } from '..';
import styled from 'styled-components';

const RadioElement = styled.input.attrs(() => ({ type: 'radio' }))({});

export interface RadioProps {
    label?: string;
}

type Props = RadioProps & React.HTMLAttributes<HTMLInputElement>;

type RadioComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLInputElement>
>;

const Radio: RadioComponent = forwardRef<HTMLInputElement, Props>(
    ({ label, ...props }, ref) => (
        <Label>
            <RadioElement ref={ref} {...props} />
            <Box>{label}</Box>
        </Label>
    ),
);

Radio.displayName = 'Radio';

export default Radio;
