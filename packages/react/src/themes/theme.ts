import { css } from 'styled-components';
import tokens from './tokens';
import { themeGet } from './helpers';
import { Button } from './default/button';
import icons from '../icons/icons';

const Paragraph = {
    styles: [
        css`
            font-size: ${themeGet('fontSizes.md')};
        `,
    ],
};

const components = {
    Paragraph,
    Button,
};

export const theme = {
    ...tokens,
    ...components,
    icons: { ...icons },
};
