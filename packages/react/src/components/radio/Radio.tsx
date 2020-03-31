import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type RadioProps = {};

type Props = RadioProps & BoxProps & React.InputHTMLAttributes<HTMLHtmlElement>;

const Radio: React.FC<Props> = ({ ...props }) => (
    <Box {...props}>
        <Box as="label">
            <Box as="input" type="radio" />
            Label
        </Box>
    </Box>
);

Radio.displayName = 'Radio';

export { Radio };
