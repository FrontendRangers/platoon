import { shade, tint } from 'polished';
import { CSSObject } from '@styled-system/css';

const colors = {
    white: '#fff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
    black: '#000',
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
};

const palette = {
    primary: colors.blue,
    secondary: colors.gray600,
    success: colors.green,
    info: colors.cyan,
    warning: colors.yellow,
    danger: colors.red,
    light: colors.gray100,
    blue100: tint(8, colors.blue),
    blue200: tint(6, colors.blue),
    blue300: tint(4, colors.blue),
    blue400: tint(2, colors.blue),
    blue500: colors.blue,
    blue600: shade(20, colors.blue),
    blue700: shade(40, colors.blue),
    blue800: shade(60, colors.blue),
    blue900: shade(80, colors.blue),
    indigo100: tint(8, colors.indigo),
    indigo200: tint(6, colors.indigo),
    indigo300: tint(4, colors.indigo),
    indigo400: tint(2, colors.indigo),
    indigo500: colors.indigo,
    indigo600: shade(2, colors.indigo),
    indigo700: shade(4, colors.indigo),
    indigo800: shade(6, colors.indigo),
    indigo900: shade(8, colors.indigo),
    purple100: tint(8, colors.purple),
    purple200: tint(6, colors.purple),
    purple300: tint(4, colors.purple),
    purple400: tint(2, colors.purple),
    purple500: colors.purple,
    purple600: shade(2, colors.purple),
    purple700: shade(4, colors.purple),
    purple800: shade(6, colors.purple),
    purple900: shade(8, colors.purple),
    pink100: tint(8, colors.pink),
    pink200: tint(6, colors.pink),
    pink300: tint(4, colors.pink),
    pink400: tint(2, colors.pink),
    pink500: colors.pink,
    pink600: shade(2, colors.pink),
    pink700: shade(4, colors.pink),
    pink800: shade(6, colors.pink),
    pink900: shade(8, colors.pink),
    red100: tint(8, colors.red),
    red200: tint(6, colors.red),
    red300: tint(4, colors.red),
    red400: tint(2, colors.red),
    red500: colors.red,
    red600: shade(2, colors.red),
    red700: shade(4, colors.red),
    red800: shade(6, colors.red),
    red900: shade(8, colors.red),
    orange100: tint(8, colors.orange),
    orange200: tint(6, colors.orange),
    orange300: tint(4, colors.orange),
    orange400: tint(2, colors.orange),
    orange500: colors.orange,
    orange600: shade(2, colors.orange),
    orange700: shade(4, colors.orange),
    orange800: shade(6, colors.orange),
    orange900: shade(8, colors.orange),
    yellow100: tint(8, colors.yellow),
    yellow200: tint(6, colors.yellow),
    yellow300: tint(4, colors.yellow),
    yellow400: tint(2, colors.yellow),
    yellow500: colors.yellow,
    yellow600: shade(2, colors.yellow),
    yellow700: shade(4, colors.yellow),
    yellow800: shade(6, colors.yellow),
    yellow900: shade(8, colors.yellow),
    green100: tint(8, colors.green),
    green200: tint(6, colors.green),
    green300: tint(4, colors.green),
    green400: tint(2, colors.green),
    green500: colors.green,
    green600: shade(2, colors.green),
    green700: shade(4, colors.green),
    green800: shade(6, colors.green),
    green900: shade(8, colors.green),
    teal100: tint(8, colors.teal),
    teal200: tint(6, colors.teal),
    teal300: tint(4, colors.teal),
    teal400: tint(2, colors.teal),
    teal500: colors.teal,
    teal600: shade(2, colors.teal),
    teal700: shade(4, colors.teal),
    teal800: shade(6, colors.teal),
    teal900: shade(8, colors.teal),
    cyan100: tint(8, colors.cyan),
    cyan200: tint(6, colors.cyan),
    cyan300: tint(4, colors.cyan),
    cyan400: tint(2, colors.cyan),
    cyan500: colors.cyan,
    cyan600: shade(2, colors.cyan),
    cyan700: shade(4, colors.cyan),
    cyan800: shade(6, colors.cyan),
    cyan900: shade(8, colors.cyan),
};

const fonts = {
    base:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const fontSizes = {
    lg: '1.25rem',
    md: '1rem',
    sm: '.875rem',
};

const fontWeights = {
    lighter: 'lighter',
    light: '300',
    normal: '400',
    bold: '700',
    bolder: 'bolder',
};

const lineHeights = {
    sm: '1.25',
    md: '1.5',
    lg: '2',
};

const radii = {
    sm: '.2rem',
    md: '.25rem',
    lg: '.3rem',
};

const space = {
    none: 0,
    xs: '.25rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
};

const styles = {
    root: {
        fontFamily: 'base',
        lineHeight: 'md',
        fontWeight: 'normal',
    },
};

const buttons = {
    borderRadius: 'md',
    intent: {
        primary: {
            bg: 'primary',
            color: 'white',
        },
        secondary: {
            bg: 'secondary',
            color: 'white',
        },
        success: {
            bg: 'success',
            color: 'white',
        },
        danger: {
            bg: 'danger',
            color: 'white',
        },
    },
    size: {
        md: {
            fontSize: 'md',
            py: '.375rem',
            px: '.75rem',
        },
        sm: {
            fontSize: 'sm',
            py: '.25rem',
            px: '.5rem',
        },
        lg: {
            fontSize: 'lg',
            py: '.5rem',
            px: '.1rem',
        },
    },
};

const inputs: CSSObject = {
    borderRadius: 'md',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray500',
    size: {
        md: {
            py: 'md',
        },
    },
};

const progress = {
    borderRadius: 'lg',
};

export default {
    space,
    colors: {
        ...colors,
        ...palette,
    },
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings: {},
    sizes: {},
    borders: {},
    borderWidths: {},
    borderStyles: {},
    radii,
    shadows: {},
    zIndices: {},
    styles,
    buttons,
    inputs,
    progress,
};
