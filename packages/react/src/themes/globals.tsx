import { css, createGlobalStyle } from 'styled-components';
import { get } from './helpers';
import { useColorMode } from './themeProvider';

const defaultSettings = {
    fontFamily:
        'SF UI Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
};

const resetStyles = ({ theme }) => {
    const mode = useColorMode();

    const fontFamily = get(theme, `fontFamily`, false)
        ? theme.fontFamily
        : defaultSettings.fontFamily;
    const textColor = get(theme, `colors.text[${mode}]`, false)
        ? theme.colors.text[mode]
        : 'initial';
    const bgColor = get(theme, `colors.background[${mode}]`, false)
        ? theme.colors.background[mode]
        : 'initial';

    return css`
        html {
            box-sizing: border-box;
            font-size: 10px;
        }

        body {
            font-size: 1.6rem;
            font-family: ${fontFamily};
            color: ${textColor};
            background-color: ${bgColor};
        }

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        ol,
        li,
        p,
        pre,
        blockquote,
        figure,
        hr {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        input,
        textarea,
        select {
            color: inherit;
            font: inherit;
            letter-spacing: inherit;
        }

        input[type='text'],
        textarea {
            width: 100%;
        }

        input,
        textarea {
            border: none;
            padding: 0;
        }

        img,
        svg,
        iframe,
        video,
        object,
        embed {
            display: block;
            max-width: 100%;
        }

        table {
            table-layout: fixed;
            width: 100%;
        }

        [hidden] {
            display: none !important;
        }

        noscript {
            display: block;
            margin-bottom: 1em;
            margin-top: 1em;
        }
    `;
};

const GlobalStyles = createGlobalStyle`
    ${resetStyles}
`;

export { GlobalStyles };
