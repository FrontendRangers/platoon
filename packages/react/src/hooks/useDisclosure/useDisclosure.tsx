import { useCallback, useState } from 'react';

export interface UseDiscloseProps {
    defaultIsOpen?: boolean;
    onOpen?(): void;
    onClose?(): void;
    id?: string;
}

export interface UseDisclosureReturn {
    isOpen: boolean;
    onOpen(): void;
    onClose(): void;
    onToggle(): void;
    getButtonProps(props?: any): any;
    getDisclosureProps(props?: any): any;
}

export type UseDisclosure = (prop?: UseDiscloseProps) => UseDisclosureReturn;

const useDisclosure: UseDisclosure = (props = {}) => {
    const {
        defaultIsOpen,
        onOpen: onOpenProp,
        onClose: onCloseProp,
        id,
    } = props;
    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    const onOpen = useCallback(() => {
        setIsOpen(true);
        onOpenProp?.();
    }, [onOpenProp]);

    const onClose = useCallback(() => {
        setIsOpen(false);
        onCloseProp?.();
    }, [onCloseProp]);

    const onToggle = useCallback(() => {
        const action = isOpen ? onClose : onOpen;
        action();
    }, [isOpen, onOpen, onClose]);

    return {
        isOpen: !!isOpen,
        onOpen,
        onClose,
        onToggle,
        getButtonProps: (props: any = {}) => ({
            ...props,
            'aria-expanded': isOpen,
            'aria-controls': id,
            onClick: onToggle,
        }),
        getDisclosureProps: (props: any = {}) => ({
            ...props,
            hidden: !isOpen,
        }),
    };
};

export default useDisclosure;
