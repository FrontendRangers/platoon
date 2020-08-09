import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

export interface ProgressProps {
    variant?: string;
}

const variants = variant({
    prop: 'variant',
    scale: 'progress.variant',
    variants: {
        primary: {},
        secondary: {},
    },
});

const Component = styled.progress<ProgressProps>(
    {
        appearance: 'none',
        overflow: 'hidden',
    },
    variants,
);

type Props = ProgressProps & React.HTMLAttributes<HTMLProgressElement>;

type ProgressComponent = React.FC<Props>;

const Progress: ProgressComponent = ({ ...props }) => <Component {...props} />;

export default Progress;
