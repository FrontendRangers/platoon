import { css } from 'styled-components';

const resetStyles = css`
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
    select,
    button {
        color: inherit;
        font: inherit;
        letter-spacing: inherit;
        background: none;
    }

    input[type='text'],
    textarea {
        width: 100%;
    }

    input,
    textarea,
    button {
        border: none;
        padding: 0;
    }

    button {
        background-color: transparent;
    }

    button * {
        pointer-events: none;
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

export default resetStyles;
