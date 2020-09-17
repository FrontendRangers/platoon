import React from 'react';
import { Box } from '../../primitives/box';
import { Label } from '../label';
import { Text } from '../text';

export interface FormElementProps {
    label?: string;
}

type FormElementComponent = React.FC<FormElementProps>;

const FormElement: FormElementComponent = ({ children, label, ...props }) => (
    <Box {...props}>
        <Label>{label}</Label>
        {children}
        <Box>Helper text</Box>
        <Box color="danger.500">
            <Text>Error text</Text>
        </Box>
    </Box>
);

export default FormElement;
