import React from 'react';
import { platoon } from '@platoon/system';

const ModalFooter: React.FC = ({ children, ...props }) => (
    <platoon.footer {...props}>{children}</platoon.footer>
);

export default ModalFooter;
