import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import styled from 'styled-components';

export const MenuItem = styled.div({});

MenuItem.displayName = 'MenuItem';

export const MenuHeader = styled.div({});

MenuHeader.displayName = 'MenuHeader';

export type MenuProps = BoxProps & React.HTMLAttributes<Element>;

interface MenuComponent extends React.FC<MenuProps> {
    Item: typeof MenuItem;
    Header: typeof MenuHeader;
}

const Menu: MenuComponent = ({ children, ...props }) => (
    <Box as="nav" {...props}>
        {children}
    </Box>
);

Menu.displayName = 'Menu';

Menu.Item = MenuItem;
Menu.Header = MenuHeader;

export default Menu;
