import { themeMode } from '../../theme/helpers';

const breakpoints = ['0', '600px', '960px', '1280px', '1920px'];

const space = {
    none: '0',
    xxs: '0.4rem',
    xs: '0.8rem',
    sm: '1.2rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
    xxl: '4.4rem',
};

const palette = {
    primary: {
        100: '#e7f0ff',
        200: '#b9d3ff',
        300: '#8bb7ff',
        400: '#5c9aff',
        500: '#2e7dff',
        600: '#0061ff',
        700: '#0050d1',
        800: '#003ea3',
    },
    secondary: {
        100: '#f0eaff',
        200: '#d3c1ff',
        300: '#b798ff',
        400: '#9a6fff',
        500: '#7d46ff',
        600: '#611eff',
        700: '#5019d1',
        800: '#3e14a3',
    },
    success: {
        100: '#e9f7f1',
        200: '#bfe8d6',
        300: '#95d8bb',
        400: '#6ac9a0',
        500: '#40ba85',
        600: '#16ab6b',
        700: '#138c58',
        800: '#0f6d45',
    },
    danger: {
        100: '#fdeeee',
        200: '#facccc',
        300: '#f7abab',
        400: '#f48989',
        500: '#f16868',
        600: '#ef4747',
        700: '#c43b3b',
        800: '#992e2e',
    },
    warning: {
        100: '#fff6e7',
        200: '#ffe4b9',
        300: '#ffd28b',
        400: '#ffc15c',
        500: '#ffaf2e',
        600: '#ff9e00',
        700: '#d18200',
        800: '#a36500',
    },
    neutral: {
        0: '#ffffff',
        100: '#f7f9fc',
        200: '#edf1f7',
        300: '#e4e9f2',
        400: '#c5cee0',
        500: '#8f9bb3',
        600: '#2e3a59',
        700: '#222b45',
        800: '#192038',
        900: '#151a30',
        1000: '#101426',
    },
    neutralDark: {
        100: '#ebecee',
        200: '#c4c8cc',
        300: '#9ca3aa',
        400: '#757f88',
        500: '#4e5a66',
        600: '#273645',
        700: '#202d39',
        800: '#19232c',
    },
    neutralLight: {
        100: '#ffffff',
        200: '#fafbfc',
        300: '#f4f5f7',
        400: '#ebecf0',
        500: '#dfe1e6',
        600: '#c1c7d0',
        700: '#a5adba',
        800: '#97a0af',
    },
};

export const colors = {
    ...palette,
    text: { primary: palette.neutral[900] },
    background: palette.neutral['1000'],
    overlay: palette.neutral['1000'],
};

export const fonts = {
    body: 'Verdana',
    heading: 'Verdana',
    monospace: 'Menlo',
};

export const fontSizes = {
    xl: '2.5rem',
    lg: '2rem',
    md: '1rem',
    sm: '1.4rem',
    xs: '1.2rem',
};

export const lineHeights = {
    sm: '1.25',
    md: '1.5',
    lg: '1.75',
};

export const fontWeights = {
    regular: '500',
    bold: '700',
};

const borders = {
    base: `1px solid ${palette.neutral[200]}`,
    input: `2px solid ${palette.neutral[400]}`,
};

const textStyles = {
    body: {
        fontSize: fontSizes.md,
        marginBottom: space.sm,
    },
    heading1: {
        fontSize: ['48px', '72px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
    },
    heading2: {
        fontSize: ['48px', '72px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
    },
    hint: {
        color: palette.warning[500],
    },
    label: {
        textTransform: 'uppercase',
    },
};

const styles = {
    root: {
        fontFamily: 'base',
        fontSize: 'md',
        fontWeight: 'base',
        color: themeMode({ light: 'neutral.1000', dark: 'neutral.0' }),
        backgroundColor: themeMode({
            light: 'neutral.0',
            dark: 'neutral.1000',
        }),
    },
};

export default {
    space,
    breakpoints,
    fonts,
    fontSizes,
    lineHeights,
    fontWeights,
    colors,
    borders,
    radii: {
        md: '4px',
        round: '100em',
    },
    animation: {
        duration: {
            slow: 600,
            fast: 300,
        },
    },
    textStyles,
    styles,
    buttons: {
        color: 'neutral.0',
        borderRadius: 'md',
        intent: {
            default: {
                bg: 'neutral.500',
            },
            primary: {
                bg: 'primary',

                '&:hover': {
                    bg: 'primary.700',
                },
            },
            secondary: {
                bg: 'secondary',

                '&:hover': {
                    bg: 'secondary.700',
                },
            },
            danger: {
                bg: 'danger',

                '&:hover': {
                    bg: 'danger.700',
                },
            },
        },
        size: {
            sm: { px: 'xs', py: 'xxs', fontSize: 'sm' },
            md: { px: 'sm', py: 'xs', fontSize: 'md' },
            lg: { px: 'md', py: 'sm', fontSize: 'lg' },
        },
    },
    cards: {
        borderRadius: 'md',
        variant: {
            default: {
                bg: 'neutral.700',
            },
        },
        Header: {
            p: 'sm',
            variant: {
                default: {
                    borderBottom: 'base',
                },
            },
        },
        Content: {
            p: 'sm',
        },
        Footer: {
            borderTop: 'base',
            p: 'sm',
        },
    },
    tabs: {
        tab: {},
        tabLink: {
            borderBottom: '1px solid yellow',
            isActive: {
                borderBottom: '1px solid red',
            },
        },
        pane: {
            p: 'md',
        },
    },
    progress: {
        variant: {
            primary: {
                '&::-webkit-progress-value': {
                    bg: 'primary.500',
                },
                '&::-webkit-progress-bar': {
                    bg: 'neutral.500',
                },
            },
            secondary: {
                '&::-webkit-progress-value': {
                    bg: 'danger.500',
                },
                '&::-webkit-progress-bar': {
                    bg: 'neutral.500',
                },
            },
        },
    },
    icons: {
        size: {
            sm: {
                width: '18px',
            },
            md: {
                width: '24px',
            },
        },
    },
    menus: {
        display: 'flex',
        flexDirection: 'column',
        item: {
            p: 'sm',
            '&:hover': {
                bg: 'neutral.700',
            },
        },
        header: {
            p: 'sm',
            mb: 'sm',
        },
    },
    tooltips: {},
    toasts: {
        p: 'xs',
        borderRadius: 'md',
        color: 'neutral.0',
        bg: 'primary.500',
    },
    navbars: {},
    modals: {
        backgroundColor: 'neutral.0',
        borderRadius: 'md',
        Header: {
            borderBottom: 'base',
            p: 'md',
        },
        Footer: {
            p: 'md',
        },
    },
    inputs: {
        Text: {
            bg: 'neutral.100',
            focus: {
                bg: 'neutral.200',
                borderColor: 'neutral.500',
            },
            size: {
                md: {
                    p: 'md',
                },
            },
        },
        Radio: {},
        Checkbox: {},
    },
};
