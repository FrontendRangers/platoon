import { createGlobalStyle } from '@platoon/system';

const GlobalStyles = createGlobalStyle`

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

`;

export { GlobalStyles };
