// import { ComponentType, FC, PropsWithChildren } from 'react';
// import { StyledComponentProps } from 'styled-components';

import React from 'react';

export interface StandardProps {
    /** The prefix of the component CSS class */
    classPrefix?: string;

    /** Additional classes */
    className?: string;

    /** Primary content */
    children?: React.ReactNode;

    /** Additional style */
    style?: React.CSSProperties;
}

export interface WithAsProps<
    As extends React.ElementType | string = React.ElementType
> extends StandardProps {
    /** You can use a custom element for this component */
    as?: As;
}
