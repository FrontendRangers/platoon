import React from 'react';
import { platoon } from '@platoon/system';

const ModalHeader: React.FC = ({ children, ...props }) => (
    <platoon.header p="sm" {...props}>
        {children}
    </platoon.header>
);

export default ModalHeader;
