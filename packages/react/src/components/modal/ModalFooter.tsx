import React from 'react';
import { platoon } from '@platoon/system';

const ModalFooter: React.FC = ({ children, ...props }) => (
    <platoon.footer p="sm" {...props}>
        {children}
    </platoon.footer>
);

export default ModalFooter;
