import React from 'react';
import { Box } from '../../primitives/box';
import { MarginProps } from 'styled-system';
import { CSSObject } from '@styled-system/css';

const buttonGroupStyles: CSSObject = {
    display: 'grid',
    gap: 'xs',
    gridAutoFlow: 'column',
};

export type ButtonGroupProps = Record<string, unknown>;

type Props = ButtonGroupProps & MarginProps;

type ButtonGroupComponent = React.FC<Props>;

const ButtonGroup: ButtonGroupComponent = ({ children, ...props }) => (
    <Box sx={buttonGroupStyles} {...props}>
        {React.Children.map(children, (child) => (
            <Box>{child}</Box>
        ))}
    </Box>
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
