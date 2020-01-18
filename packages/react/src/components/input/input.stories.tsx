import React from 'react';

import { Input } from './';

export default {
    title: 'Components/Forms/Input',
};

export const Default = () => <Input />;

Default.story = {
    name: 'default',
};

export const WithAPlaceholder = () => <Input placeholder={'Fill me'} />;

WithAPlaceholder.story = {
    name: 'with a placeholder',
};
