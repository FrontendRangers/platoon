import React, { useState, useRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Popper } from '../../primitives/popper';

export type TooltipProps = {
    content: string;
};

type Props = TooltipProps & BoxProps;

const Tooltip: React.FC<Props> = ({ children, content, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef();

    return (
        <>
            <Box
                as="span"
                ref={triggerRef}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {children}
            </Box>
            <Popper
                isOpen={isOpen}
                triggerRef={triggerRef}
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
                <Box tx="tooltips" {...props}>
                    {content}
                </Box>
            </Popper>
        </>
    );
};

export { Tooltip };
