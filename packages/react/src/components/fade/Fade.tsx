import React from 'react';
import {
    Transition,
    TransitionStyles,
    TransitionBaseProps,
} from '../transition';

const styles: TransitionStyles = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
    exited: {
        opacity: 0,
    },
};

export type FadeProps = Omit<TransitionBaseProps, 'transitionStyles'>;

type Props = FadeProps;

type FadeComponent = React.FC<Props>;

const Fade: FadeComponent = ({ children, ...props }) => (
    <Transition transitionStyles={styles} {...props}>
        {children}
    </Transition>
);

export default Fade;
