import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

export interface InputProps {
    size?: 'sm' | 'md' | 'lg';
}

type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = forwardRef(
    (
        { size = 'md', type = 'text', ...props },
        ref: React.Ref<HTMLInputElement>,
    ) => <Box as="input" ref={ref} size={size} type={type} {...props}></Box>,
);

Input.displayName = 'Input';

export { Input };
