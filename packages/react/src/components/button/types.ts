import { IconProps } from '../icon';

export type PlatoonComponent<Props> = React.FC<
    Props & React.RefAttributes<any>
>;

interface PlatoonComponentBaseProps {
    forwardedAs?: any;
    forwardRef?: any;
    children?: React.ReactNode;
    as?: string;
}

export interface ButtonStyleProps extends PlatoonComponentBaseProps {
    icon?: string;
    iconRight?: string;
    variant?: string;
    intent?: string;
    size?: string;
    isFull?: boolean;
    isFocus?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: Function;
}

export interface ButtonLabelProps {
    isLoading: boolean;
}

export interface ButtonIconProps extends IconProps {
    position: string;
    isLoading: boolean;
}

export interface ButtonLoadingProps {
    state: any;
}
