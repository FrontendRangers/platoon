import React from 'react';
import styled from 'styled-components';
import { Box } from '../../primitives/box';

export interface RadioProps {}

const RadioInputElement = styled('input').attrs(() => ({ type: 'radio' }))``;

const RadioComponent = styled(Box)``;

const Radio = ({ ...props }: RadioProps) => (
    <RadioComponent {...props}>
        <RadioInputElement></RadioInputElement>
        <label htmlFor="">Label</label>
    </RadioComponent>
);

export { Radio };
