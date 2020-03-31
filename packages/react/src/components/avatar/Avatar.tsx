import React from 'react';
import { Box } from '../../primitives/box';

export interface AvatarProps {
    image: string;
}

const rootStyles = {
    width: '32px',
    height: '32px',
    borderRadius: 'round',
    overflow: 'hidden',
};

const Avatar = ({ image, ...props }: AvatarProps) => (
    <Box sx={rootStyles} {...props}>
        <img src={image} />
    </Box>
);

export default Avatar;
