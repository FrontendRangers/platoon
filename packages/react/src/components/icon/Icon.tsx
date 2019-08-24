import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Box } from '../../primitives/box';
import { themed } from '../../themes/helpers';

export interface IconProps {
    name: string;
    size?: string;
}

const IconComponent = styled(Box)<IconProps>`
    width: 24px;
    height: 24px;

    svg {
        width: 100%;
        height: 100%;
    }

    ${themed('Icon')}
`;

const Icon = ({ name, size }: IconProps) => {
    const IconSvg = React.lazy(() =>
        import('../../icons').then((module) => module[name]),
    );
    return (
        <Suspense
            fallback={<IconComponent name={name} size={size}></IconComponent>}
        >
            <IconComponent name={name} size={size}>
                <IconSvg></IconSvg>
            </IconComponent>
        </Suspense>
    );
};

export { Icon };
