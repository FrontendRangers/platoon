import React, { useState } from 'react';
import { usePopper } from './usePopper';

export default {
    title: 'Hooks/usePopper',
};

export const Default = () => {
    const [visible, setVisible] = useState(false);
    const [ref, popper, popperStyles] = usePopper({ visible });

    return (
        <>
            <button
                ref={ref}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible}
            >
                Show popper
            </button>
            {visible && (
                <div ref={popper} style={{ ...popperStyles }}>
                    I&apos;m popping
                </div>
            )}
        </>
    );
};

Default.story = {
    name: 'default',
};
