import React, { Children, isValidElement, cloneElement, FC } from 'react';
import { useMenuContext } from './useMenu';
import { useMenuTriggerAria } from './useMenuAria';

type MenuTriggerProps = Record<string, unknown>;

export const MenuTrigger: FC<MenuTriggerProps> = ({ children }) => {
    const { isOpen, getButtonProps } = useMenuContext();
    const ariaProps = useMenuTriggerAria({ isExpanded: isOpen });

    if (!Children.only(children) || !isValidElement(children)) return <></>;

    return cloneElement(children, {
        ...getButtonProps(),
        ...ariaProps,
    });
};

MenuTrigger.displayName = 'Menu.Trigger';
