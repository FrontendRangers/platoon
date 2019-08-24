import React from 'react';
import styled from 'styled-components';
import { Box } from '../../primitives/box';

export interface AvatarProps {
    image: string;
}

const AvatarComponent = styled(Box)`
    width: 32px;
    height: 32px;
    border-radius: 100em;
    overflow: hidden;
`;

const Avatar = ({ image, ...props }: AvatarProps) => (
    <AvatarComponent {...props}>
        <img src={image} />
    </AvatarComponent>
);

export { Avatar };
