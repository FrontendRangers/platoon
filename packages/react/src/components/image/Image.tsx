import { platoon } from '@platoon/system';
import React, { ComponentPropsWithRef, forwardRef } from 'react';

export type ImageProps = ComponentPropsWithRef<'img'>;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    const { src = '', ...rest } = props;
    return <platoon.img src={src} ref={ref} {...rest} />;
});

Image.displayName = 'Image';

export default Image;
