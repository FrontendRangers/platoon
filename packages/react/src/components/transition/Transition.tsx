import React, { isValidElement } from 'react';
import { CSSObject } from '@styled-system/css';
import Transition, {
    TransitionProps,
    TransitionStatus,
} from 'react-transition-group/Transition';

const defaultTransitionStyles = {
    entering: {},
    entered: {},
    exiting: {},
    exited: {},
    unmounted: {},
};

const getStyles = ({
    state,
    inProp,
    timeout,
    transitionStyles,
}): CSSObject => ({
    visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
    transition: `opacity ${timeout}ms ease-in-out`,
    willChange: 'opacity',
    ...transitionStyles[state],
});

export type TransitionStyles = Partial<Record<TransitionStatus, CSSObject>>;

export interface TransitionBaseProps extends Omit<TransitionProps, 'timeout'> {
    transitionStyles: TransitionStyles;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
}

type TransitionBaseComponent = React.FC<TransitionBaseProps>;

const TransitionBase: TransitionBaseComponent = ({
    children,
    in: inProp,
    timeout = 300,
    transitionStyles = defaultTransitionStyles,
    ...props
}) => {
    const child = React.Children.only(children);
    if (!isValidElement(child)) {
        return <>{child}</>;
    }
    return (
        <Transition appear in={inProp} timeout={timeout} {...props}>
            {(
                state: TransitionStatus,
                childProps: typeof child.props,
            ): JSX.Element =>
                React.cloneElement(child, {
                    style: {
                        ...getStyles({
                            state,
                            inProp,
                            timeout,
                            transitionStyles,
                        }),
                        ...child.props.style,
                    },
                    ...childProps,
                })
            }
        </Transition>
    );
};

export default TransitionBase;
