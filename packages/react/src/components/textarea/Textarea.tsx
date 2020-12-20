import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { BoxProps } from '../../primitives/box';

export type TextareaProps = BoxProps & ComponentPropsWithRef<'textarea'>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props, ref) => <platoon.textarea ref={ref} {...props} />,
);

Textarea.displayName = 'Textarea';

export default Textarea;
