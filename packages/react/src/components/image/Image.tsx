import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = forwardRef(
    ({ src = '', ...props }, ref: React.Ref<HTMLImageElement>) => (
        <Box as="img" src={src} ref={ref} {...props}></Box>
    ),
);

Image.displayName = 'Image';

export { Image };
