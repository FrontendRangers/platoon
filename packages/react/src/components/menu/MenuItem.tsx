import React, { useContext, MouseEvent } from 'react';
import { MenuContext } from './useMenu';
import { useMenuItemAria } from './useMenuAria';
import { Box } from '../..';
import styled from 'styled-components';

const MenuItemLink = styled.a({});

interface MenuItemProps {
    onClick?: (event: MouseEvent<Element>) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    const { close } = useContext(MenuContext);
    const ariaProps = useMenuItemAria();

    const handleClick = (event: MouseEvent<Element>) => {
        onClick?.(event);
        close();
        event.stopPropagation();
    };

    return (
        <Box onClick={handleClick} {...ariaProps}>
            <MenuItemLink onClick={handleClick}>{children}</MenuItemLink>
        </Box>
    );
};

MenuItem.displayName = 'Menu.Item';
