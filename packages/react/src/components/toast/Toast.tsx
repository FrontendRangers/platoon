import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button, DismissButton } from '../button';
import { Icon } from '../icon';
import { ButtonGroup } from '../button-group';
import { CSSObject } from '@styled-system/css';

const toastStyles: CSSObject = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridGap: 'sm',
};

export interface ToastProps {
    title?: string;
    description: string;
}

type Props = ToastProps & BoxProps;

type ToastComponent = React.FC<Props>;

const Toast: ToastComponent = ({ title, description, ...props }) => (
    <Box sx={toastStyles} {...props}>
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
