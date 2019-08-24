import React from 'react';
import styled from 'styled-components';
import { Box } from '../../primitives/box';

export interface CheckboxProps {}

const CheckboxInputElement = styled('input').attrs(() => ({
    type: 'checkbox',
}))``;

const CheckboxComponent = styled(Box)``;

const Checkbox = ({ ...props }: CheckboxProps) => (
    <CheckboxComponent {...props}>
        <CheckboxInputElement></CheckboxInputElement>
        <label htmlFor="">Label</label>
    </CheckboxComponent>
);

export { Checkbox };
