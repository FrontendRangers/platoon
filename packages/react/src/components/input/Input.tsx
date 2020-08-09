import React, { forwardRef, useState, useEffect } from 'react';
import { Box } from '../../primitives/box';
import styled from 'styled-components';

type InputBaseProps = React.HTMLAttributes<HTMLInputElement>;

const InputBase = styled.input<InputBaseProps>({});

InputBase.displayName = 'InputBase';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
    size?: InputSize;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    inputProps?: any;
    inputRef?: any;
}

type Props = InputProps & React.HTMLAttributes<HTMLInputElement>;

type InputComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLDivElement>
>;

const Input: InputComponent = forwardRef(
    (
        {
            size = 'md',
            addonLeft,
            addonRight,
            onChange,
            onFocus,
            onBlur,
            onKeyDown,
            type = 'text',
            readOnly,
            placeholder,
            value: controlledValue,
            inputRef,
            inputProps,
            ...props
        },
        ref,
    ) => {
        const [value, setValue] = useState(controlledValue);

        useEffect(() => {
            setValue(controlledValue);
        }, [controlledValue]);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.currentTarget.value);
            if (onChange) {
                onChange(event);
            }
        };

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            if (onFocus) {
                onFocus(event);
            }
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            if (onBlur) {
                onBlur(event);
            }
        };

        const handleKeyDown = (
            event: React.KeyboardEvent<HTMLInputElement>,
        ) => {
            if (onKeyDown) {
                onKeyDown(event);
            }
        };
        return (
            <Box ref={ref} size={size} {...props}>
                {addonLeft && (
                    <Box>{React.Children.map(addonLeft, (addon) => addon)}</Box>
                )}

                <InputBase
                    ref={inputRef}
                    typ={type}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    readOnly={readOnly}
                    value={value}
                    placeholder={placeholder}
                    size={size}
                    {...inputProps}
                />

                {addonRight && (
                    <Box>
                        {React.Children.map(addonRight, (addon) => addon)}
                    </Box>
                )}
            </Box>
        );
    },
);

Input.displayName = 'Input';

export default Input;
