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

const fontSizes = {
    xl: '2.5rem',
    lg: '2rem',
    md: '1.6rem',
    sm: '1.4rem',
    xs: '1.2rem',
};

const textStyles = {
    danger: {
        color: palette.danger[500],
    },
    heading: {
        h1: {
            fontSize: fontSizes.xl,
        },
        h2: {
            fontSize: fontSizes.lg,
        },
    },
};

const tokens = {
    fontSizes: fontSizes,
    colors: palette,
    textStyles: textStyles,
    space: {
        none: '0',
        xxs: '0.4rem',
        xs: '0.8rem',
        sm: '1.2rem',
        md: '1.6rem',
        lg: '2.4rem',
        xl: '3.2rem',
        xxl: '4.4rem',
    },
    radii: {
        md: '4px',
    },
    animation: {
        duration: {
            slow: 600,
            fast: 300,
        },
    },
};

export default tokens;
