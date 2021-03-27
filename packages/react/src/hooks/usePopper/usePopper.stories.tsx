/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { usePopper } from '.';
import { UsePopperProps } from './usePopper';
import { Button } from '../../components';
import { Box } from '../../primitives';
import { useDisclosure } from '../useDisclosure';

export default {
    title: 'Hooks/usePopper',
} as Meta;

export const Default: Story<UsePopperProps> = (args) => {
    const { anchorRef, popperRef } = usePopper(args);

    return (
        <>
            <Button ref={anchorRef}>Anchor</Button>
            <Box ref={popperRef}>Popper</Box>
        </>
    );
};

Default.args = {
    placement: 'bottom',
};

export const withDisclosure: Story<UsePopperProps> = (args) => {
    const { anchorRef, popperRef } = usePopper(args);
    const { getButtonProps, getDisclosureProps } = useDisclosure();

    return (
        <>
            <Button ref={anchorRef} {...getButtonProps()}>
                Anchor
            </Button>
            <Box ref={popperRef} {...getDisclosureProps()}>
                Popper
            </Box>
        </>
    );
};
