import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type ButtonGroupProps = BoxProps;

type ButtonGroupComponent = React.FC<ButtonGroupProps>;

const ButtonGroup: ButtonGroupComponent = ({ children, ...props }) => (
    <Box {...props}>
        {React.Children.map(children, (child) => (
            <Box>{child}</Box>
        ))}
    </Box>
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
