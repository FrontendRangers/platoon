import React, { FC } from 'react';
import { platoon } from '@platoon/system';
import { Popper } from '../../primitives/popper';
import { usePopper } from '../../hooks';

export interface TooltipProps {
    content: string;
}

const Tooltip: FC<TooltipProps> = ({ children, content, ...props }) => {
    const { triggerProps, popperProps } = usePopper({
        trigger: 'hover',
    });

    return (
        <>
            <platoon.span {...triggerProps}>{children}</platoon.span>
            <Popper
                {...popperProps}
                popperOptions={{
                    placement: 'top',
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 8],
                            },
                        },
                    ],
                }}
            >
                <platoon.div {...props}>{content}</platoon.div>
            </Popper>
        </>
    );
};

export default Tooltip;
