import React from 'react';
import { Box } from '../../primitives/box';
import { Popper } from '../../primitives/popper';
import { Fade } from '../fade';
import { usePopper } from '../../hooks';

export interface TooltipProps {
    content: string;
}

type TooltipComponent = React.FC<TooltipProps>;

const Tooltip: TooltipComponent = ({ children, content, ...props }) => {
    const { triggerProps, popperProps } = usePopper({
        trigger: 'hover',
    });

    return (
        <>
            <Box {...triggerProps}>{children}</Box>
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
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <Box {...props}>{content}</Box>
                    </Fade>
                )}
            </Popper>
        </>
    );
};

export default Tooltip;
