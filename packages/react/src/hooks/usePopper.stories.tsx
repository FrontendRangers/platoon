import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { usePopper } from './usePopper';

storiesOf('Hooks|usePopper', module).add('default', () => {
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
});
