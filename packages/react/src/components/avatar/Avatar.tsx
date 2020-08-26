import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

export interface AvatarProps {
    image: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ image, ...props }) => (
        <Box {...props}>
            <img src={image} />
        </Box>
    ),
);

Avatar.displayName = 'Avatar';

export default Avatar;
