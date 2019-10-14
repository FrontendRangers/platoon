import styled from 'styled-components';
import {
    PlatoonComponent,
    ButtonStyleProps,
    ButtonIconProps,
    ButtonLabelProps,
    ButtonLoadingProps,
} from './types';
import { Box } from '../../primitives';
import { Icon } from '../icon';
import { ButtonStyles as defaultStyles } from '@frontendrangers/platoon-core';

interface PlatoonThemeStyles {
    themeStyles: any;
}

type PlatoonStyled<T> = PlatoonThemeStyles & T;

const Button: PlatoonComponent<ButtonStyleProps & any> = styled(Box)<
    PlatoonStyled<ButtonStyleProps>
>(defaultStyles, ({ themeStyles }) => themeStyles);

Button.displayName = 'Button';

const ButtonLabel: PlatoonComponent<ButtonLabelProps & any> = styled(Box).attrs(
    () => ({
        as: 'span',
    }),
)<PlatoonStyled<ButtonLabelProps>>`
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity 300ms ease-in-out;
    ${({ themeStyles }) => themeStyles};
`;

ButtonLabel.displayName = 'ButtonLabel';

const ButtonIcon: PlatoonComponent<ButtonIconProps & any> = styled(Icon)<
    PlatoonStyled<ButtonIconProps>
>`
    vertical-align: middle;
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity 300ms ease-in-out;
    ${({ themeStyles }) => themeStyles};
`;

ButtonIcon.displayName = 'ButtonIcon';

const ButtonLoading: PlatoonComponent<ButtonLoadingProps & any> = styled(Box)<
    PlatoonStyled<ButtonLoadingProps>
>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
    transition: opacity 300ms ease-in-out;
`;

ButtonLoading.displayName = 'ButtonLoading';

export const Styled = {
    Button,
    ButtonLabel,
    ButtonIcon,
    ButtonLoading,
};
