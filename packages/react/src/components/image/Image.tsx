import React from 'react';
import { forwardRef } from '@platoon/system';
import { Box, BoxProps } from '../../primitives';

export type ImageProps = BoxProps;

const Image = forwardRef<ImageProps, 'img'>((props, ref) => {
    const { src = '', ...rest } = props;
    return <Box as="img" src={src} ref={ref} {...rest} />;
});

Image.displayName = 'Image';

export default Image;
