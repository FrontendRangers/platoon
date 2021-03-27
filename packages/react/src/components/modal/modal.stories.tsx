import React from 'react';
import { Modal } from './';
import { Box } from '../../primitives/box';
import { Paragraph, Button } from '../';
import { Meta, Story } from '@storybook/react';
import { ModalProps } from './Modal';
import { useDisclosure } from '../../hooks';

export default {
    title: 'Overlays/Modal',
    component: Modal,
    decorators: [
        (StoryComponent: Story): any => (
            <Box>
                <Paragraph mb="md">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, sed dolorum ex delectus, earum architecto
                    suscipit, dicta dolore est soluta iure facere rem culpa nisi
                    minima molestiae dolores aperiam error.
                </Paragraph>
                <StoryComponent />
            </Box>
        ),
    ],
} as Meta;

export const Default: Story<ModalProps> = (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Open modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={onClose}>
                <Modal.Header>Modal Header</Modal.Header>
                <Modal.Body>
                    <Paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Omnis placeat, quo delectus veritatis, praesentium
                        reiciendis nemo soluta eaque beatae error eius nam
                        ducimus in dolorem at necessitatibus eos aperiam nulla?
                    </Paragraph>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Cancel</Button>
                    <Button>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
