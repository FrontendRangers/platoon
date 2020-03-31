import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button } from '../button';

export interface ToastProps {
    title?: string;
    description: string;
}

type Props = ToastProps & BoxProps;

export const Toast: React.FC<Props> = ({ title, description, ...props }) => (
    <Box
        tx="toasts"
        display="grid"
        gridTemplateColumns="1fr min-content"
        gridGap="8px"
        {...props}
    >
        <Box>
            {title && <Heading>{title}</Heading>}
            <Paragraph>{description}</Paragraph>
        </Box>
        <Box>
            <Button size="xs" kind="minimal">
                &times;
            </Button>
        </Box>
    </Box>
);

export default Toast;
