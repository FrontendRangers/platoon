import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';

export type AvatarProps = ComponentPropsWithRef<'div'> & {
    image: string;
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ image, ...props }, ref) => (
        <platoon.div ref={ref} {...props}>
            <platoon.img src={image} />
        </platoon.div>
    ),
);

Avatar.displayName = 'Avatar';

export default Avatar;
