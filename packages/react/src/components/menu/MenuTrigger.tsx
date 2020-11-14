import React, {
    useContext,
    Children,
    isValidElement,
    cloneElement,
    MouseEvent,
} from 'react';
import { MenuContext } from './useMenu';
import { useMenuTriggerAria } from './useMenuAria';

type MenuTriggerProps = Record<string, unknown>;

export const MenuTrigger: React.FC<MenuTriggerProps> = ({ children }) => {
    const { isOpen, toggle } = useContext(MenuContext);
    const ariaProps = useMenuTriggerAria({ isExpanded: isOpen });

    if (!Children.only(children) || !isValidElement(children)) return <></>;

    const handleClick = (event: MouseEvent<Element>) => {
        children.props.onClick?.(event);
        toggle();
    };

    return cloneElement(children, {
        onClick: handleClick,
        ...ariaProps,
    });
};

MenuTrigger.displayName = 'Menu.Trigger';
