import React from 'react';
import { usePopper } from '.';

export default {
    title: 'Hooks/usePopper',
};

export const Default = () => {
    const { anchorRef, triggerProps, popperProps, isOpen } = usePopper();

    return (
        <>
            <button ref={anchorRef} {...triggerProps}>
                Show popper
            </button>
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
