import styled from 'styled-components';

export interface TextProps {
    children: React.ReactNode;
    as?: string | React.Component;
}

const Text = styled('span')<TextProps>``;

export { Text };
