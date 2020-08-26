import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';
import { Label } from '../label';
import styled from 'styled-components';

const CheckboxComponent = styled.input.attrs(() => ({ type: 'checkbox' }))({});

export interface CheckboxProps {
    label?: string;
}

type Props = CheckboxProps & React.HTMLAttributes<HTMLInputElement>;

type CheckboxComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLInputElement>
>;

const Component: CheckboxComponent = forwardRef(({ label, ...props }, ref) => (
    <Label>
        <CheckboxComponent ref={ref} {...props} />
        <Box>{label}</Box>
    </Label>
));

Component.displayName = 'Checkbox';

export default Component;
