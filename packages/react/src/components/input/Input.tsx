import React from 'react';
import styled from 'styled-components';
import Box from '../../primitives/box';
import { themed } from '../../themes/helpers';

export interface InputProps {
    placeholder?: string;
}

const InputElement = styled('input').attrs(() => ({ type: 'text' }))``;

const InputComponent = styled(Box)`
    ${themed('Input')}
`;

const Input = ({ placeholder, ...props }: InputProps) => (
    <InputComponent {...props}>
        <label htmlFor="">Label</label>
        <InputElement placeholder={placeholder}></InputElement>
    </InputComponent>
);

export default Input;
