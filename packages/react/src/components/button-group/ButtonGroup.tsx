import React from 'react';
import { Box } from '../../primitives/box';
import { MarginProps } from 'styled-system';
import { Button } from '../button';

const itemStyles = {
    '&:first-of-type': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
    },
    '&:last-of-type': { borderTopLeftRadius: '0', borderBottomLeftRadius: '0' },
    '&:not(:first-of-type):not(:last-of-type)': { borderRadius: '0' },
};

export const ButtonGroupItem = (props) => (
    <Button {...props} sx={itemStyles}></Button>
);

export type ButtonGroupProps = {};

type Props = ButtonGroupProps & MarginProps;

const ButtonGroup: React.FC<Props> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
