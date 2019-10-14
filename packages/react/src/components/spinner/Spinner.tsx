import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '../../primitives/box';

type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerStyleProps {
    size?: SpinnerSize;
}

interface StyledSpinnerProps
    extends SpinnerStyleProps,
        React.SVGAttributes<SVGElement> {}

const SpinnerAnimation = keyframes`
    from {
        transform: rotate(0);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

// TODO: Implement sizes
const StyledSpinner = styled(Box).attrs(() => ({ as: 'svg' }))<
    StyledSpinnerProps
>`
    animation-name: ${SpinnerAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

interface SpinnerProps
    extends SpinnerStyleProps,
        React.SVGAttributes<SVGElement> {}

const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    ...props
}: SpinnerStyleProps) => (
    <StyledSpinner
        size={size}
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
        {...props}
    >
        <g fill="none">
            <path
                fill="white"
                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            />
        </g>
    </StyledSpinner>
);

Spinner.displayName = 'Spinner';

export { Spinner };
