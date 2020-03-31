import React from 'react';
import { Text } from './';
// import docs from './text.mdx';

export default {
    title: 'Typography/Text',
    // parameters: {
    //     docs: {
    //         page: docs,
    //     },
    // },
};

export const Default = () => <Text>I'm some text</Text>;

export const AsParagraph = () => <Text as="p">I'm a paragraph</Text>;
