import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useDisclosure } from '.';
import { Button } from '../../components';
import { Box } from '../../primitives';
import { UseDiscloseProps } from './useDisclosure';

export default {
    title: 'Hooks/useDisclosure',
} as Meta;

export const Base: Story<UseDiscloseProps> = () => {
    const { getButtonProps, getDisclosureProps } = useDisclosure();

    return (
        <>
            <Button {...getButtonProps()}>Toggle</Button>
            <Box {...getDisclosureProps()}>Disclosure content</Box>
        </>
    );
};

export const DefaultIsOpen: Story<UseDiscloseProps> = () => {
    const { getButtonProps, getDisclosureProps } = useDisclosure({
        defaultIsOpen: true,
    });

    return (
        <>
            <Button {...getButtonProps()}>Toggle</Button>
            <Box {...getDisclosureProps()}>Disclosure content</Box>
        </>
    );
};
