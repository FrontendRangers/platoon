import React from 'react';
import { platoon } from '@platoon/system';

const ModalBody: React.FC = ({ children, ...props }) => (
    <platoon.div p="sm" {...props}>
        {children}
    </platoon.div>
);

export default ModalBody;
