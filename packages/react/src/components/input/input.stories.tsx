import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { IconButton } from '../button';
import { Icon } from '../icon';

import { Input, InputProps } from './';

export default {
    title: 'Forms/Input',
    component: Input,
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = { placeholder: 'Enter text' };

export const Small: Story<InputProps> = (args) => <Input {...args} />;

Small.args = { placeholder: 'A small input' };

export const Password: Story<InputProps> = (args) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Input {...args} />
            <Input {...args} type={isVisible ? 'text' : 'password'}>
                <Input.Right>
                    <IconButton
                        icon="heart"
                        onClick={() => setVisible(!isVisible)}
                    />
                </Input.Right>
            </Input>
        </>
    );
};

Password.args = { placeholder: 'A password input', type: 'password' };

export const Rounded: Story<InputProps> = (args) => <Input {...args} />;

Rounded.args = { isRounded: true };

export const WithAddonLeft: Story<InputProps> = (args) => (
    <Input {...args}>
        <Input.Left>
            <Icon name="heart" />
        </Input.Left>
    </Input>
);

WithAddonLeft.args = { placeholder: 'Enter text' };

export const WithMultipleAddonLeft: Story<InputProps> = (args) => (
    <Input {...args}>
        <Input.Left>
            <Icon name="heart" />
        </Input.Left>
        <Input.Left>
            <Icon name="heart" />
        </Input.Left>
    </Input>
);

WithMultipleAddonLeft.args = { placeholder: 'Enter text' };

export const WithAddonRight: Story<InputProps> = (args) => (
    <Input {...args}>
        <Input.Right>
            <Icon name="heart" />
        </Input.Right>
    </Input>
);

WithAddonRight.args = { placeholder: 'Enter text' };

export const WithMultipleAddonRight: Story<InputProps> = (args) => (
    <Input {...args}>
        <Input.Right>
            <Icon name="heart" />
        </Input.Right>
        <Input.Right>
            <Icon name="heart" />
        </Input.Right>
    </Input>
);

WithMultipleAddonRight.args = { placeholder: 'Enter text' };

export const WithAddonLeftAndRight: Story<InputProps> = (args) => (
    <Input {...args}>
        <Input.Right>
            <Icon name="heart" />
        </Input.Right>
        <Input.Left>
            <Icon name="heart" />
        </Input.Left>
    </Input>
);

WithAddonLeftAndRight.args = { placeholder: 'Enter text' };
