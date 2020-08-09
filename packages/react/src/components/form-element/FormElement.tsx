import React from 'react';
import { Box } from '../../primitives/box';
import { Label, Text } from '..';

export interface FormElementProps {
    label?: string;
}

type Props = FormElementProps;

type FormElementComponent = React.FC<Props>;

const FormElement: FormElementComponent = ({ children, label, ...props }) => (
    <Box {...props}>
        <Label>{label}</Label>
        {children}
        <Box>Helper text</Box>
        <Box>
            <Text color="danger.500">Error text</Text>
        </Box>
    </Box>
);

export default FormElement;
