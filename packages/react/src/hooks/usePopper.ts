import { useRef, useEffect, useState } from 'react';
import Popper, { Data } from 'popper.js';

export interface UsePopperProps {
    visible: boolean;
}

export const usePopper = ({ visible }: UsePopperProps) => {
    const ref = useRef(null);
    const popper = useRef(null);
    const [styles, setStyles] = useState();
    const options = {};

    const modifier = (data: Data) => {
        setStyles(data.offsets.popper);
        return data;
    };

    useEffect(() => {
        if (!visible || !ref.current || !popper.current) return;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const instance = new Popper(ref.current!, popper.current!, {
            removeOnDestroy: true,
            placement: 'right',
            modifiers: {
                applyStyle: { enabled: false },
                setStyle: {
                    enabled: true,
                    fn: modifier,
                    order: 900,
                },
            },
            ...options,
        });
        return () => instance.destroy();
    }, [visible]);

    return [ref, popper, styles];
};
