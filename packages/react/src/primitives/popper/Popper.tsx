import React, { FC, useState } from 'react';
import { Options as PopperOptions } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { platoon } from '@platoon/system';

export interface PopperProps {
    anchorRef: React.RefObject<any>;
    placement?: PopperOptions['placement'];
    popperOptions?: Partial<PopperOptions>;
}

const defaultPopperOptions: Partial<PopperOptions> = {
    modifiers: [],
    strategy: 'absolute',
};

const Popper: FC<PopperProps> = (props) => {
    const {
        children,
        anchorRef,
        placement = 'bottom',
        popperOptions = defaultPopperOptions,
        ...rest
    } = props;
    const [popperElement, setPopperElement] = useState(null);

    const { styles, attributes } = usePopper(anchorRef.current, popperElement, {
        placement,
        ...popperOptions,
    });

    return (
        <platoon.div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            {...rest}
        >
            {children}
        </platoon.div>
    );
};

Popper.displayName = 'Popper';

export default Popper;
