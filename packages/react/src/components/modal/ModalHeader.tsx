import React from 'react';
import { platoon } from '@platoon/system';

const ModalHeader: React.FC = ({ children, ...props }) => (
    <platoon.header {...props}>{children}</platoon.header>
);

export default ModalHeader;
