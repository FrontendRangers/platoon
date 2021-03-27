import React, { FC } from 'react';
import { platoon } from '@platoon/system';
import { useTooltip } from './useTooltip';

export interface TooltipProps {
    content: string;
}

const Tooltip: FC<TooltipProps> = (props) => {
    const { children, content, ...rest } = props;
    const { isOpen, getAnchorProps, getTooltipProps } = useTooltip();

    return (
        <>
            <platoon.span {...getAnchorProps()}>{children}</platoon.span>
            <platoon.div hidden={!isOpen} {...getTooltipProps()} {...rest}>
                {content}
            </platoon.div>
        </>
    );
};

export default Tooltip;
