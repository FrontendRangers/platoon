import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

// Move to theme
const svgContent = {
    chevronDown: {
        path: <polyline points="6 9 12 15 18 9" />,
    },
    chevronUp: {
        path: <polyline points="18 15 12 9 6 15" />,
    },
    heart: {
        path: (
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        ),
    },
    x: {
        path: (
            <g>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </g>
        ),
    },
};

export interface IconProps {
    name: string;
    size?: string;
}

type IconComponent = React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
>;

const Icon: IconComponent = forwardRef(
    ({ name = 'x', size = 'md', ...props }, ref) => (
        <Box
            as="svg"
            ref={ref}
            size={size}
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
    ),
);

Icon.displayName = 'Icon';

export default Icon;
