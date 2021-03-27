/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-types */
import { useDisclosure, usePopper } from '../../hooks';
import React, { useCallback } from 'react';
type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>;

export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
    if (ref == null) return;

    if (typeof ref === 'function') {
        ref(value);
        return;
    }

    try {
        // @ts-ignore
        ref.current = value;
    } catch (error) {
        throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
    }
}

export function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
    return React.useMemo(() => {
        if (refs.every((ref) => ref == null)) {
            return null;
        }
        return (node: T) => {
            refs.forEach((ref) => {
                if (ref) assignRef(ref, node);
            });
        };
    }, [refs]);
}

type UseTooltipProps = {};

export const useTooltip = (props: UseTooltipProps = {}) => {
    const { anchorRef, popperRef } = usePopper();
    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log(props);

    const getAnchorProps = () => {
        return {
            ref: mergeRefs(anchorRef),
            onMouseEnter: onOpen,
            onMouseLeave: onClose,
        };
    };

    const getTooltipProps = useCallback(() => {
        return {
            ref: mergeRefs(popperRef),
        };
    }, [isOpen]);

    return {
        isOpen,
        getAnchorProps,
        getTooltipProps,
    };
};
