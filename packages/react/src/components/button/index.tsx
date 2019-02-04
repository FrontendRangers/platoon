import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

const Button: React.SFC<ButtonProps> = ({ children }) => (
    <button>{children}</button>
);

export default Button;
