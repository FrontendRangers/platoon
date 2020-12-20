import React, { ComponentPropsWithRef, forwardRef, RefObject } from 'react';
import { Flex } from '../../primitives/flex';
import { platoon } from '@platoon/system';
import { inputStyles } from '@platoon/core';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outlined' | 'filled' | 'unstyled';

type InputBaseProps = ComponentPropsWithRef<'input'>;

const InputBase = platoon('input');

InputBase.displayName = 'InputBase';

export interface InputOptions {
    variant?: InputVariant;
    size?: InputSize;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    inputProps?: ComponentPropsWithRef<'input'>;
    inputRef?: RefObject<HTMLInputElement>;
}

export type InputProps = InputOptions & InputBaseProps;

const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
    const {
        addonLeft,
        addonRight,
        type = 'text',
        readOnly,
        placeholder,
        inputRef,
        inputProps,
        ...rest
    } = props;
    return (
        <Flex ref={ref} {...rest}>
            {addonLeft && (
                <platoon.div>
                    {React.Children.map(addonLeft, (addon) => addon)}
                </platoon.div>
            )}

            <InputBase
                ref={inputRef}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                {...inputProps}
                {...inputStyles}
            />

            {addonRight && (
                <platoon.div>
                    {React.Children.map(addonRight, (addon) => addon)}
                </platoon.div>
            )}
        </Flex>
    );
});

Input.displayName = 'Input';

export default Input;
