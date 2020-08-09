import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import styled from 'styled-components';

export const MenuItem = styled.div({});

MenuItem.displayName = 'MenuItem';

export const MenuHeader = styled.div({});

MenuHeader.displayName = 'MenuHeader';

export type MenuProps = Record<string, unknown>;

type Props = MenuProps & BoxProps;

interface MenuComponent
    extends React.ForwardRefExoticComponent<
        Props & React.RefAttributes<HTMLElement>
    > {
    Item: typeof MenuItem;
    Header: typeof MenuHeader;
}

const Menu: MenuComponent = forwardRef(({ children, ...props }, ref) => (
    <Box ref={ref} as="nav" {...props}>
        {children}
    </Box>
));

Menu.displayName = 'Menu';

Menu.Item = MenuItem;
Menu.Header = MenuHeader;

export default Menu;
