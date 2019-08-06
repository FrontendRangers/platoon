import { css } from 'styled-components';
import tokens from './tokens';

const get = (obj, path, defaultValue) => {
    const result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(
            (res, key) => (res !== null && res !== undefined ? res[key] : res),
            obj,
        );
    return result === undefined || result === obj ? defaultValue : result;
};

export const themeGet = (path, fallback: any = null) => (props) =>
    get(props.theme, path, fallback);

const Paragraph = [
    css`
        font-size: ${themeGet('fontSizes.md')};
    `,
];

const ButtonBaseStyles = [
    css`
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;

        &:focus {
            outline: none;
        }
    `,
];

const ButtonVariantSyles = {
    default: {
        base: [
            css`
                color: ${themeGet('colors.neutral[600]')};
                background-color: ${themeGet('colors.neutral[200]')};
            `,
        ],
        hover: [
            css`
                background-color: ${themeGet('colors.neutral[400]')};
            `,
        ],
        active: [
            css`
                background-color: ${themeGet('colors.neutral[400]')};
            `,
        ],
        focus: [
            css`
                background-color: ${themeGet('colors.neutral[400]')};
                box-shadow: 0 0 0 1px ${themeGet('colors.neutral[500]')},
                    0 0 0 4px ${themeGet('colors.neutral[200]')};
            `,
        ],
    },
    primary: {
        base: [
            css`
                color: ${themeGet('colors.neutral[0]')};
                background-color: ${themeGet('colors.primary[500]')};
            `,
        ],
        hover: [
            css`
                background-color: ${themeGet('colors.primary[400]')};
            `,
        ],
        active: [
            css`
                background-color: ${themeGet('colors.primary[600]')};
            `,
        ],
        focus: [
            css`
                background-color: ${themeGet('colors.primary[600]')};
                box-shadow: 0 0 0 1px ${themeGet('colors.primary[700]')},
                    0 0 0 4px ${themeGet('colors.neutral[200]')};
            `,
        ],
    },
    secondary: {
        base: [
            css`
                background-color: ${themeGet('colors.secondary[500]')};
            `,
        ],
        hover: [
            css`
                background-color: ${themeGet('colors.secondary[400]')};
            `,
        ],
        active: [
            css`
                background-color: ${themeGet('colors.secondary[600]')};
            `,
        ],
        focus: [
            css`
                background-color: ${themeGet('colors.secondary[600]')};
                border: 1px solid ${themeGet('colors.secondary[800]')};
                outline: none;
                box-shadow: 0 0 0 4px ${themeGet('colors.neutral[200]')};
            `,
        ],
    },
    danger: {
        base: [
            css`
                color: ${themeGet('colors.neutral[0]')};
                background-color: ${themeGet('colors.danger[500]')};
            `,
        ],
        hover: [
            css`
                background-color: ${themeGet('colors.danger[400]')};
            `,
        ],
        active: [
            css`
                background-color: ${themeGet('colors.danger[600]')};
            `,
        ],
        focus: [
            css`
                background-color: ${themeGet('colors.danger[600]')};
                box-shadow: 0 0 0 1px ${themeGet('colors.danger[700]')},
                    0 0 0 4px ${themeGet('colors.neutral[200]')};
            `,
        ],
    },
    disabled: [
        css`
            background-color: red;
        `,
    ],
};

const ButtonSizeStyles = {
    xs: [
        css`
            font-size: ${themeGet('fontSizes.xs')};
            padding: ${themeGet('space.xxs')} ${themeGet('space.xs')};
        `,
    ],
    sm: [
        css`
            font-size: ${themeGet('fontSizes.sm')};
            padding: ${themeGet('space.xs')} ${themeGet('space.sm')};
        `,
    ],
    md: [
        css`
            font-size: ${themeGet('fontSizes.md')};
            padding: ${themeGet('space.sm')} ${themeGet('space.md')};
        `,
    ],
    lg: [
        css`
            font-size: ${themeGet('fontSizes.lg')};
            padding: ${themeGet('space.md')} ${themeGet('space.lg')};
        `,
    ],
    xl: [
        css`
            font-size: ${themeGet('fontSizes.xl')};
            padding: ${themeGet('space.md')} ${themeGet('space.xl')};
        `,
    ],
};

const Components = {
    components: {
        Paragraph,
        Button: ({ variant, size }) => css`
            ${ButtonBaseStyles};
            ${ButtonSizeStyles[size]};
            ${ButtonVariantSyles[variant] &&
                ButtonVariantSyles[variant]['base']};

            &:hover {
                ${ButtonVariantSyles[variant] &&
                    ButtonVariantSyles[variant]['hover']};
            }

            &:active {
                ${ButtonVariantSyles[variant] &&
                    ButtonVariantSyles[variant]['active']};
            }

            &:focus {
                ${ButtonVariantSyles[variant] &&
                    ButtonVariantSyles[variant]['focus']};
            }

            &:disabled {
                ${ButtonVariantSyles[variant] && ButtonVariantSyles.disabled};
            }
        `,
    },
};

export const theme = {
    ...tokens,
    ...Components,
};
