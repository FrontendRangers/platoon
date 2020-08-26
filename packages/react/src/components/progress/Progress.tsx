import React from 'react';
import styled from 'styled-components';

export interface ProgressProps
    extends React.HTMLAttributes<HTMLProgressElement> {
    variant?: string;
}

const Component = styled.progress<ProgressProps>({
    appearance: 'none',
    overflow: 'hidden',
});

type ProgressComponent = React.FC<ProgressProps>;

const Progress: ProgressComponent = ({ ...props }) => <Component {...props} />;

export default Progress;
