import React from 'react';
import styled from 'styled-components';
import Box from '../../primitives/box';
import { MarginProps } from 'styled-system';
import { Button } from '../button';

const ButtonGroupItem = styled<any>(Button)`
    &:first-of-type {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:last-of-type {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }
`;

export interface ButtonGroupProps extends MarginProps {
    children: any;
}
const ButtonGroupComponent = styled<any>(Box)`

    color: red;
`;

const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => (
    <ButtonGroupComponent {...props}>{children}</ButtonGroupComponent>
);

ButtonGroup.Item = ButtonGroupItem;

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
