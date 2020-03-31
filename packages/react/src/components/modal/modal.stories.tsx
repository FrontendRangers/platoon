import React from 'react';
import { Modal } from './';
import { Box } from '../../primitives/box';
import { Paragraph } from '../../components/paragraph';

export default {
    title: 'Overlays/Modal',
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

export const Default = () => <Modal isOpen={true}>I'm a modal</Modal>;
