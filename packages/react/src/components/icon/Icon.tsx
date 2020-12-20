import React, { forwardRef } from 'react';
import { platoon } from '@platoon/system';

type SVGContent = Record<string, any>;

// Move to theme
const svgContent: SVGContent = {
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

type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps {
    name: string;
    size?: IconSize;
}

const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
    const { name = 'x', size = '16px', ...rest } = props;
    return (
        <platoon.svg
            ref={ref}
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...rest}
        >
            {svgContent[name].path}
        </platoon.svg>
    );
});

Icon.displayName = 'Icon';

export default Icon;
