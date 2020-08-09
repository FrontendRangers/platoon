import React, { forwardRef } from 'react';

export type ImageProps = React.HTMLAttributes<HTMLImageElement>;

type ImageComponent = React.ForwardRefExoticComponent<
    ImageProps & React.RefAttributes<HTMLImageElement>
>;

const Image: ImageComponent = forwardRef(({ src = '', ...props }, ref) => (
    <img src={src} ref={ref} {...props} />
));

Image.displayName = 'Image';

export default Image;
