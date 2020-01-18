import React from 'react';
import { ButtonGroup } from './';

export default {
    title: 'Components/Actions/Button Group',
};

export const Default = () => (
    <ButtonGroup>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
    </ButtonGroup>
);

Default.story = {
    name: 'default',
};
