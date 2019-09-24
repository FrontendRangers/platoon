import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export const withForwardRef = (WrappedComponent) => {
    const ForwardRefComponent: React.ForwardRefExoticComponent<
        any
    > = React.forwardRef((props, ref) => (
        <WrappedComponent forwardRef={ref} {...props} />
    ));

    ForwardRefComponent.displayName = WrappedComponent.displayName;
    ForwardRefComponent.defaultProps = WrappedComponent.defaultProps;
    hoistNonReactStatics(ForwardRefComponent, WrappedComponent);

    return ForwardRefComponent;
};
