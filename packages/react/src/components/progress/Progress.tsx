import React from 'react';
import { Box } from '../../primitives/box';
import styled from 'styled-components';
import { variant } from 'styled-system';

export interface ProgressProps {
    variant?: string;
}

type Props = ProgressProps & React.ProgressHTMLAttributes<HTMLProgressElement>;

const variants = variant({
    prop: 'variant',
    scale: 'progress.variant',
    variants: {
        primary: {},
        secondary: {},
    },
});

const Component = styled(Box)<ProgressProps>(
    {
        appearance: 'none',
        overflow: 'hidden',
    },
    variants,
);

const Progress: React.FC<Props> = ({ variant = 'primary', ...props }) => (
    <Component
        as="progress"
        sx={{ borderRadius: 'md' }}
        variant={variant}
        tx="progress"
        {...props}
    ></Component>
);

export { Progress };
