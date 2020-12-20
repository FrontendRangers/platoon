interface UseMenuTriggerAriaProps {
    isExpanded: boolean;
}

export const useMenuTriggerAria = ({
    isExpanded,
}: UseMenuTriggerAriaProps) => ({
    'aria-haspopup': true,
    'aria-expanded': isExpanded ?? true,
});

export const useMenuAria = () => ({ role: 'menu' });

export const useMenuItemAria = () => ({ role: 'menuitem' });
