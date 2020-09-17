import { createContext, useState } from 'react';

interface MenuContextOptions {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const MenuContext = createContext<MenuContextOptions>({
    isOpen: false,
    open: () => void 0,
    close: () => void 0,
    toggle: () => void 0,
});

export const useMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    const toggle = () => setIsOpen(!isOpen);

    return {
        isOpen,
        open,
        close,
        toggle,
    };
};
