import { createGlobalStyle } from 'styled-components';
import resetStyles from './reset';

const GlobalStyles = createGlobalStyle`
    ${resetStyles}

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

`;

export { GlobalStyles };
