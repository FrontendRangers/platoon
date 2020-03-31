import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

export type PortalProps = { id?: string };

type Props = PortalProps;

const Portal: React.FC<Props> = ({ children, id = 'portal' }) => {
    const container = document.createElement('div');
    container.setAttribute('id', id);
    const mount = document.body;

    useEffect(() => {
        mount.appendChild(container);
        return () => {
            mount.removeChild(container);
        };
    }, [container, mount]);

    return createPortal(children, container);
};

export default Portal;
