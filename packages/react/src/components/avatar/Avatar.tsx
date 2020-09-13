import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

export interface AvatarProps {
    image: string;
}

type AvatarComponent = React.ForwardRefExoticComponent<
    AvatarProps & React.RefAttributes<HTMLDivElement>
>;

const Avatar: AvatarComponent = forwardRef(({ image, ...props }, ref) => (
    <Box ref={ref} {...props}>
        <img src={image} />
    </Box>
));

Avatar.displayName = 'Avatar';

export default Avatar;
