import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type MenuProps = {};

type Props = MenuProps & BoxProps;

const Menu: React.FC<Props> = ({ children, ...props }) => (
    <Box as="nav" tx="menus" {...props}>
        {children}
    </Box>
);

export const MenuItem: React.FC<{}> = ({ children, ...props }) => (
    <Box tx="menus.item" {...props}>
        {children}
    </Box>
);

export const MenuHeader: React.FC<{}> = ({ children, ...props }) => (
    <Box tx="menus.header" {...props}>
        {children}
    </Box>
);

export default Menu;
