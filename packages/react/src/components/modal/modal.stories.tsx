import React, { useState } from 'react';
import { Modal } from './';
import { Box } from '../../primitives/box';
import { Paragraph, Button } from '../';

export default {
    title: 'Overlays/Modal',
    component: Modal,
    decorators: [
        (storyFn) => (
            <Box>
                <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, sed dolorum ex delectus, earum architecto
                    suscipit, dicta dolore est soluta iure facere rem culpa nisi
                    minima molestiae dolores aperiam error.
                </Paragraph>
                {storyFn()}
            </Box>
        ),
    ],
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    return (
        <>
            <Button onClick={toggleModal}>Open modal</Button>
            <Modal isOpen={isOpen}>
                <Modal.Header>Modal Header</Modal.Header>
                The content
                <Modal.Footer>
                    <Button>Cancel</Button>
                    <Button>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
