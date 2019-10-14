import React, { useState } from 'react';
import { SpaceProps } from 'styled-system';
import { withForwardRef } from '../../hoc';
import { composeComponent } from '../../utils';
import { Transition } from 'react-transition-group';
import { ButtonStyleProps, PlatoonComponent } from './types';
import { Styled } from './styled';
import {
    getButtonStyles,
    getButtonIconStyles,
    getButtonLabelStyles,
} from './styles';
import { Spinner } from '../spinner';

type ButtonProps = ButtonStyleProps &
    SpaceProps &
    React.ComponentPropsWithRef<'button'> &
    React.Ref<HTMLButtonElement>;

interface ButtonCompoundComponents {
    Icon?: React.FC;
}

const ButtonComponent: PlatoonComponent<ButtonProps> &
    ButtonCompoundComponents = ({
    as = 'button',
    forwardRef,
    children,
    icon,
    iconRight,
    size = 'md',
    intent = 'primary',
    variant = 'solid',
    isFull = false,
    isDisabled = false,
    isLoading = false,
    onClick = () => {},
    ...props
}: ButtonStyleProps) => {
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus: React.FocusEventHandler<HTMLButtonElement> = (
        event: React.FocusEvent<HTMLButtonElement>,
    ) => {
        // TODO: handle focus state with keyboard
        console.log(event);
        setIsFocus(true);
    };

    const handleOnBlur: React.FocusEventHandler<HTMLButtonElement> = (
        event: React.FocusEvent<HTMLButtonElement>,
    ) => {
        // TODO: handle blur state with keyboard
        console.log(event);
        setIsFocus(false);
    };

    const buttonThemeStyles = getButtonStyles({
        size,
        intent,
        variant,
        isDisabled,
        isFull,
    });

    const buttonIconThemeStyles = getButtonIconStyles({ size });

    const buttonLabelThemeStyles = getButtonLabelStyles({ size });

    const isLinkTag = as === 'a';

    return (
        <Styled.Button
            role={isLinkTag ? 'link' : 'button'}
            as={as}
            intent={intent}
            themeStyles={buttonThemeStyles}
            onFocus={(event: React.FocusEvent<HTMLButtonElement>) =>
                handleOnFocus(event)
            }
            onBlur={(event: React.FocusEvent<HTMLButtonElement>) =>
                handleOnBlur(event)
            }
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                onClick(event)
            }
            disabled={isDisabled || isLoading}
            isFull={isFull}
            isLoading={isLoading}
            isFocus={isFocus}
            ref={forwardRef}
            {...props}
        >
            {!!icon && (
                <Styled.ButtonIcon
                    name={icon}
                    isLoading={isLoading}
                    themeStyles={buttonIconThemeStyles}
                ></Styled.ButtonIcon>
            )}
            {children && (
                <Styled.ButtonLabel
                    isLoading={isLoading}
                    themeStyles={buttonLabelThemeStyles}
                >
                    {children}
                </Styled.ButtonLabel>
            )}
            {!!iconRight && (
                <Styled.ButtonIcon
                    name={iconRight}
                    isLoading={isLoading}
                    themeStyles={buttonIconThemeStyles}
                ></Styled.ButtonIcon>
            )}

            <Transition timeout={200} in={isLoading} mountOnEnter unmountOnExit>
                {(state) => (
                    <Styled.ButtonLoading state={state}>
                        <Spinner></Spinner>
                    </Styled.ButtonLoading>
                )}
            </Transition>
        </Styled.Button>
    );
};

ButtonComponent.Icon = Styled.ButtonIcon;

ButtonComponent.displayName = 'Button';

const Button = composeComponent(withForwardRef)(ButtonComponent);

export { Button };
