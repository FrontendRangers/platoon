import React, { ComponentPropsWithRef, RefObject } from 'react';
import { Flex } from '../../primitives/flex';
import { forwardRef, platoon } from '@platoon/system';
import { inputStyles } from '@platoon/core';
import { getValidChildren } from '@platoon/utils';
import { BoxProps } from '../../primitives';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outlined' | 'filled' | 'unstyled';

type InputBaseProps = BoxProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputBase = platoon('input', inputStyles);

InputBase.displayName = 'InputBase';

const InputLeft = platoon('div');
InputLeft.displayName = 'Input.Left';

const InputRight = platoon('div');
InputRight.displayName = 'Input.Right';

const styles = {
    border: '2px solid #cecece',
    borderRadius: '4px',
    padding: '8px',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '&:focus-within': {
        border: '2px solid rgba(3, 102, 214, 1)',
        boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
    },
    variants: {
        isRounded: {
            borderRadius: '100em',
        },
    },
};

export interface InputOptions {
    variant?: InputVariant;
    size?: InputSize;
    isRounded?: boolean;
    inputProps?: ComponentPropsWithRef<'input'>;
    inputRef?: RefObject<HTMLInputElement>;
}

export type InputProps = InputOptions & InputBaseProps;

const Component = forwardRef<InputProps, 'div'>((props, ref) => {
    const {
        children,
        type = 'text',
        readOnly,
        placeholder,
        inputRef,
        inputProps,
        value,
        onChange,
        ...rest
    } = props;

    const validChildren = getValidChildren(children);

    const leftClones = validChildren.map((child: React.ReactElement) => {
        if (child.type !== InputLeft) {
            return null;
        }

        return React.cloneElement(child);
    });

    const rightClones = validChildren.map((child: React.ReactElement) => {
        if (child.type !== InputRight) {
            return null;
        }

        return React.cloneElement(child);
    });

    return (
        <Flex ref={ref} sx={styles} {...rest}>
            {leftClones}
            <InputBase
                ref={inputRef}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...inputProps}
            />

            {rightClones}
        </Flex>
    );
});

Component.displayName = 'Input';

const Input = Object.assign(Component, { Right: InputRight, Left: InputLeft });

export default Input;
