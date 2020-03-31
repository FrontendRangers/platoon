import { themeMode } from '../../theme/helpers';

// const breakpoints = {
//     xs: '0',
//     sm: '600px',
//     md: '960px',
//     lg: '1280px',
//     xl: '1920px',
// };

const breakpoints = ['0', '600px', '960px', '1280px', '1920px'];

breakpoints['xs'] = breakpoints[0];
breakpoints['sm'] = breakpoints[1];
breakpoints['md'] = breakpoints[2];
breakpoints['lg'] = breakpoints[3];
breakpoints['xl'] = breakpoints[4];

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
        100: '#f2f6ff',
        200: '#d9e4ff',
        300: '#a6c1ff',
        400: '#598bff',
        500: '#3366ff',
        600: '#274bdb',
        700: '#1a34b8',
        800: '#102694',
        900: '#091c7a',
    },
    success: '#67c23a',
    danger: {
        500: '#f56c6c',
    },
    warning: {
        500: '#e6a23c',
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
};

const colors = {
    overlay: palette['1000'],
};

const fontSizes = {
    xl: '2.5rem',
    lg: '2rem',
    md: '1rem',
    sm: '1.4rem',
    xs: '1.2rem',
};

const text = {
    body: {
        fontSize: fontSizes.md,
        mb: 'sm',
    },
    heading: {
        h1: {
            fontSize: fontSizes.xl,
            color: 'red',
        },
        h2: {
            fontSize: fontSizes.lg,
            color: 'blue',
        },
    },
    danger: {
        color: palette.danger[500],
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
    fonts: {
        base: 'Verdana',
    },
    fontSizes,
    colors: { ...palette, ...colors },
    text,
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
    styles,
    buttons: {
        color: 'neutral.0',
        borderRadius: 'md',
        intent: {
            default: {
                bg: 'neutral.500',
            },
            primary: {
                bg: themeMode({
                    dark: 'primary.500',
                    light: 'secondary.500',
                }),

                '&:hover': {
                    bg: 'primary.700',
                },
            },
            danger: {
                bg: 'danger.500',

                '&:hover': {
                    bg: 'danger.700',
                },
            },
        },
        size: {
            sm: { px: 'sm', py: 'xs' },
            md: { px: 'md', py: 'sm' },
            lg: { px: 'lg', py: 'md' },
        },
    },
    cards: {
        borderRadius: 'md',
        variant: {
            default: {
                bg: 'primary.500',
            },
        },
        Header: {
            p: 'sm',
            variant: {
                default: {
                    borderBottom: '1px solid red',
                },
            },
        },
        Content: {
            p: 'sm',
        },
        Footer: {
            borderTop: '1px solid red',
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
};
