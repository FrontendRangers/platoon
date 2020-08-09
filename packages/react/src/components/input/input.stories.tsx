import React from 'react';

import { Input } from './';

export default {
    title: 'Forms/Input',
    component: Input,
};

export const Default = () => <Input value="Input text" />;

export const WithAPlaceholder = () => <Input placeholder="Placeholder" />;

export const WithAddonLeft = () => <Input addonLeft={<>AddonLeft</>} />;

export const WithMultipleAddonLeft = () => (
    <Input addonLeft={[<>AddonLeft</>, <>AddonLeft</>]} />
);

export const WithAddonRight = () => <Input addonRight={<>AddonRight</>} />;

export const WithMultipleAddonRight = () => (
    <Input addonRight={[<>AddonRight</>, <>AddonRight</>]} />
);

export const WithAddonLeftAndRight = () => (
    <Input addonLeft={<>AddonLeft</>} addonRight={<>AddonRight</>} />
);
