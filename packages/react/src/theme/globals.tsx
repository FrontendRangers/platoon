import { createGlobalStyle } from 'styled-components';
import resetStyles from './reset';

const GlobalStyles = createGlobalStyle`
    ${resetStyles}
`;

export { GlobalStyles };
