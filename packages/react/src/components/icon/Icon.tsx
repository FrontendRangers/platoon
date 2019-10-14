import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { SpaceProps } from 'styled-system';
import { Box } from '../../primitives';

interface IconElementProps extends React.SVGAttributes<SVGElement> {
    size?: string;
}

const IconElement = styled(Box)<IconElementProps>`
    width: 1em;
    height: 1em;
`;

export interface IconProps {
    name: string;
    size?: string;
}

type Props = IconProps & SpaceProps & React.ComponentPropsWithoutRef<'svg'>;

const Icon: React.FC<Props> = ({ name, size = 'md', ...props }: IconProps) => {
    const { icons } = useContext(ThemeContext);
    const paths = icons[name].path;
    const viewBox = '0 0 24 24';
    return (
        <IconElement
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            size={size}
            {...props}
        >
            {paths}
        </IconElement>
    );
};

Icon.displayName = 'Icon';

export { Icon };
