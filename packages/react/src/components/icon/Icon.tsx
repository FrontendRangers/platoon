import React from 'react';
import { Box } from '../../primitives/box';
import { MarginProps } from 'styled-system';

export interface IconProps extends MarginProps {
    name: string;
    size?: string;
}

const svgContent = {
    heart: {
        path: (
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        ),
    },
};

const Icon: React.FC<IconProps> = ({
    name = 'heart',
    size = 'md',
    ...props
}) => (
    <Box
        as="svg"
        size={size}
        vx={['size']}
        tx="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {svgContent[name].path}
    </Box>
);
Icon.displayName = 'Icon';

export { Icon };
