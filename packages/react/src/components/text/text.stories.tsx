import React from 'react';
import { Text } from './';

export default {
    title: 'Typography/Text',
    component: Text,
};

export const Default = () => <Text>I'm some text</Text>;

export const AsParagraph = () => <Text as="p">I'm a paragraph</Text>;
