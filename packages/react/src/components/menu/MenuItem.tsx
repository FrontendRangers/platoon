import React, { useContext, MouseEvent } from 'react';
import { MenuContext } from './useMenu';
import { useMenuItemAria } from './useMenuAria';
import { platoon } from '@platoon/system';

const MenuItemLink = platoon('a');

interface MenuItemProps {
    onClick?: (event: MouseEvent<Element>) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    const { onClose } = useContext(MenuContext);
    const ariaProps = useMenuItemAria();

    const handleClick = (event: MouseEvent<Element>) => {
        onClick?.(event);
        onClose();
    };

    return (
        <platoon.div onClick={handleClick} {...ariaProps}>
            <MenuItemLink onClick={handleClick}>{children}</MenuItemLink>
        </platoon.div>
    );
};

MenuItem.displayName = 'Menu.Item';
