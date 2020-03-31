import React from 'react';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { Box } from '../../primitives/box';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';
import { TransitionStatus } from 'react-transition-group/Transition';

const DURATION = 300;

export interface DrawerProps {
    children: any;
    isOpen: boolean;
    side?: string;
}

export interface DrawerComponentProps {
    state: any;
    side: string;
}

const getAnimation = (state: string, side: string) => {
    const getParams = (offset: number) => {
        return {
            left: () => `translateX(${offset * -1}%)`,
            right: () => `translateX(${offset}%)`,
            top: () => `translateY(${offset * -1}%)`,
            bottom: () => `translateY(${offset}%)`,
        }[side];
    };

    return (
        {
            entering: () => css`
                opacity: 0;
                transform: ${getParams(100)};
            `,
            entered: () => css`
                opacity: 1;
                transform: ${getParams(0)};
            `,
            exiting: () => css`
                opacity: 0;
                transform: ${getParams(0)};
            `,
            exited: () => css`
                opacity: 0;
                transform: ${getParams(0)};
            `,
        }[state] ||
        css`
            opacity: 1;
        `
    );
};

const DrawerComponent = styled(Box)<DrawerComponentProps>`
    width: 400px;
    height: 100%;
    background-color: lightgrey;
    padding: 1em;
    transition: ${`all ${DURATION}ms ease-in-out`};

    ${({ state, side }) => getAnimation(state, side)}
`;

const Drawer = ({ children, isOpen, side = 'left' }: DrawerProps) => (
    <Transition in={isOpen} timeout={DURATION} unmountOnExit mountOnEnter>
        {(state: TransitionStatus) => (
            <Portal>
                <Overlay>
                    <DrawerComponent state={state} side={side}>
                        {children}
                        {state}
                    </DrawerComponent>
                </Overlay>
            </Portal>
        )}
    </Transition>
);

export default Drawer;
