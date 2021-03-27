/* eslint-disable @typescript-eslint/ban-types */
/**
 * All credit goes to Chakra UI
 */

import * as React from 'react';
import { As, ComponentWithAs, PropsOf, RightJoinProps } from './system.types';

export function forwardRef<Props extends object, Component extends As>(
    component: React.ForwardRefRenderFunction<
        any,
        RightJoinProps<PropsOf<Component>, Props> & {
            as?: As;
        }
    >,
) {
    return (React.forwardRef(component) as unknown) as ComponentWithAs<
        Component,
        Props
    >;
}
