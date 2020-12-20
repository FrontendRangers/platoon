import { platoon } from '@platoon/system';
import React, { ComponentPropsWithRef, FC } from 'react';

export type ProgressProps = ComponentPropsWithRef<'progress'> & {
    variant?: string;
};

const Component = platoon('progress', {
    appearance: 'none',
    overflow: 'hidden',
});

const Progress: FC<ProgressProps> = ({ ...props }) => <Component {...props} />;

export default Progress;
