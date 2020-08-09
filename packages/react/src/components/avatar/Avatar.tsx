import React, { forwardRef } from 'react';
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

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ image, ...props }) => (
        <Box sx={rootStyles} {...props}>
            <img src={image} />
        </Box>
    ),
);

Avatar.displayName = 'Avatar';

export default Avatar;
