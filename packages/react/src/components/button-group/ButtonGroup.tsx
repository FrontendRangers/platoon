import { platoon } from '@platoon/system';
import React, {
    Children,
    cloneElement,
    ComponentPropsWithRef,
    createContext,
    forwardRef,
    isValidElement,
    ReactElement,
    useContext,
    useMemo,
} from 'react';
import { Flex } from '../../primitives';
import { buttonDefaultProps, ButtonOptions } from '../button/Button';

export type ButtonGroupOptions = ButtonOptions;

export type ButtonGroupProps = ButtonGroupOptions &
    ComponentPropsWithRef<'div'>;

const ButtonGroupContext = createContext({});

export const useButtonGroup = () => {
    const context = useContext(ButtonGroupContext);
    return context;
};

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ children, size, ...props }, ref) => {
        const clonedChildren = Children.toArray(children).filter((child) =>
            isValidElement(child),
        );

        const context = useMemo(() => ({ size }), [size]);

        return (
            <ButtonGroupContext.Provider value={context}>
                <Flex ref={ref} flexWrap="nowrap" {...props}>
                    {clonedChildren.map((child, index) => (
                        <platoon.div mr="sm" key={`button-group-item-${index}`}>
                            {cloneElement(child as ReactElement)}
                        </platoon.div>
                    ))}
                </Flex>
            </ButtonGroupContext.Provider>
        );
    },
);

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.defaultProps = buttonDefaultProps as ButtonGroupOptions;

export default ButtonGroup;
