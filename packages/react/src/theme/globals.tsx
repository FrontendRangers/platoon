import { createGlobalStyle } from 'styled-components';
import { css } from '@styled-system/css';
import resetStyles from './reset';

const rootStyles = css({
    body: {
        variant: 'styles.root',
    },
});

const GlobalStyles = createGlobalStyle`
    ${resetStyles}
    ${rootStyles}
`;

export { GlobalStyles };
