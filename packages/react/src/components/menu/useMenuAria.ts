export const useMenuTriggerAria = ({ isExpanded }) => ({
    'aria-haspopup': true,
    'aria-expanded': isExpanded ?? true,
});

export const useMenuAria = () => ({ role: 'menu' });

export const useMenuItemAria = () => ({ role: 'menuitem' });
