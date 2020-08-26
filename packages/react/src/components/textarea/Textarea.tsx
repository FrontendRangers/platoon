import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TextareaProps = BoxProps &
    React.HTMLAttributes<HTMLTextAreaElement>;

type TextareaComponent = React.ForwardRefExoticComponent<
    TextareaProps & React.RefAttributes<HTMLTextAreaElement>
>;

const Textarea: TextareaComponent = forwardRef(({ ...props }, ref) => (
    <Box as="textarea" ref={ref} {...props} />
));

Textarea.displayName = 'Textarea';

export default Textarea;
