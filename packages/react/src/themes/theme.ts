import { css } from 'styled-components';
import { color } from './helpers';

const Space = {
    space: { none: 0, xs: 4, sm: 8, md: 16, lg: 32, xl: 64, xxl: 128 },
};

const Colors = {
    color: {
        red: 'red',
        blue: 'blue',
    },
    palette: {},
};

const Components = {
    components: {
        Button: [
            css`
                background-color: ${color('blue')};
            `,
            css`
                border-radius: 5px;
            `,
        ],
    },
};

export default {
    ...Space,
    ...Colors,
    ...Components,
};
