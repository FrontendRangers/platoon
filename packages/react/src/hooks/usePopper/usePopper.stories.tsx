import React from 'react';
import { Meta, Story } from '@storybook/react';
import { usePopper } from '.';
import { UsePopperProps } from './usePopper';

export default {
    title: 'Hooks/usePopper',
} as Meta;

export const Default: Story<UsePopperProps> = (args) => {
    const { triggerProps, popperProps, isOpen } = usePopper(args);

    return (
        <>
            <button {...triggerProps}>Show popper</button>
            {isOpen && <div {...popperProps}>I&apos;m popping</div>}
        </>
    );
};

// export const onHover = () => {
// const { anchorRef, triggerProps, popperProps, isOpen } = usePopper({
//     trigger: 'hover',
// });
// return (
//     <>
//         <button ref={anchorRef} {...triggerProps}>
//             Show popper
//         </button>
//         {isOpen && <div {...popperProps}>I&apos;m popping</div>}
//     </>
// );
// };
