import React, { useContext, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../../primitives/box';
import { MenuContext, useMenu } from './useMenu';
import { useMenuAria } from './useMenuAria';
import { MenuItem } from './MenuItem';
import { MenuTrigger } from './MenuTrigger';

type MenuListProps = Record<string, unknown>;

export const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
    const { isOpen } = useContext(MenuContext);
    const ariaProps = useMenuAria();
    return (
        <>
            {isOpen && (
                <Box {...props} {...ariaProps}>
                    {children}
                </Box>
            )}
        </>
    );
};

MenuList.displayName = 'Menu.List';

type MenuHeaderProps = Record<string, unknown>;

export const MenuHeader = styled.div<MenuHeaderProps>({});

MenuHeader.displayName = 'Menu.Header';

type MenuDividerProps = Record<string, unknown>;

export const MenuDivider = styled('hr')<MenuDividerProps>({});

MenuDivider.displayName = 'Menu.Divider';

export type MenuProps = BoxProps & HTMLAttributes<Element>;

interface MenuComponent extends React.FC<MenuProps> {
    Trigger: typeof MenuTrigger;
    List: typeof MenuList;
    Item: typeof MenuItem;
    Header: typeof MenuHeader;
    Divider: typeof MenuDivider;
}

const Menu: MenuComponent = ({ children }) => {
    const context = useMenu();
    return (
        <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
    );
};

Menu.displayName = 'Menu';

Menu.Trigger = MenuTrigger;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Header = MenuHeader;
Menu.Divider = MenuDivider;

export default Menu;
