import React, { useContext, HTMLAttributes, FC } from 'react';
import { BoxProps } from '../../primitives/box';
import { MenuContext, useMenu } from './useMenu';
import { useMenuAria } from './useMenuAria';
import { MenuItem } from './MenuItem';
import { MenuTrigger } from './MenuTrigger';
import { platoon } from '@platoon/system';

type MenuListProps = Record<string, unknown>;

export const MenuList: FC<MenuListProps> = ({ children, ...props }) => {
    const { getDisclosureProps } = useContext(MenuContext);
    const ariaProps = useMenuAria();
    return (
        <platoon.div {...getDisclosureProps(props)} {...ariaProps}>
            {children}
        </platoon.div>
    );
};

MenuList.displayName = 'Menu.List';

// type MenuHeaderProps = Record<string, unknown>;

export const MenuHeader = platoon('div');

MenuHeader.displayName = 'Menu.Header';

// type MenuDividerProps = Record<string, unknown>;

export const MenuDivider = platoon('hr');

MenuDivider.displayName = 'Menu.Divider';

export type MenuProps = BoxProps & HTMLAttributes<Element>;

const Component: FC<MenuProps> = ({ children }) => {
    const context = useMenu();
    return (
        <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
    );
};

Component.displayName = 'Menu';

type MenuComponent = typeof Component & {
    Trigger: typeof MenuTrigger;
    List: typeof MenuList;
    Item: typeof MenuItem;
    Header: typeof MenuHeader;
    Divider: typeof MenuDivider;
};

const Menu = Component as MenuComponent;

Menu.Trigger = MenuTrigger;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Header = MenuHeader;
Menu.Divider = MenuDivider;

export default Menu;
