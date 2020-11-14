import React from 'react';
import { Box } from '../../primitives/box';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button, DismissButton } from '../button';
import { Icon } from '../icon';
import { ButtonGroup } from '../button-group';

export interface ToastProps {
    title?: string;
    description: string;
}

type ToastComponent = React.FC<ToastProps>;

const Toast: ToastComponent = ({ title, description, ...props }) => (
    <Box {...props}>
        <Box>
            <Icon name="heart" />
            {title && <Heading>{title}</Heading>}
            <Paragraph>{description}</Paragraph>
        </Box>
        <Box>
            <DismissButton kind="minimal" />
        </Box>
        <ButtonGroup>
            <Button kind="minimal">Cancel</Button>
            <Button kind="minimal">Confirm</Button>
        </ButtonGroup>
    </Box>
);

export default Toast;
