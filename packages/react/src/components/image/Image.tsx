import React, { forwardRef, ImgHTMLAttributes } from 'react';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

type ImageComponent = React.ForwardRefExoticComponent<
    ImageProps & React.RefAttributes<HTMLImageElement>
>;

const Image: ImageComponent = forwardRef(({ src = '', ...props }, ref) => (
    <img src={src} ref={ref} {...props} />
));

Image.displayName = 'Image';

export default Image;
