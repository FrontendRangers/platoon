import React from 'react';

import { Input } from './';
import { Box } from '../../primitives/box';

export default {
    title: 'Forms/Input',
    decorators: [(storyFn) => <Box p="lg">{storyFn()}</Box>],
};

export const Default = () => <Input />;

export const WithAPlaceholder = () => <Input placeholder={'Fill me'} />;
