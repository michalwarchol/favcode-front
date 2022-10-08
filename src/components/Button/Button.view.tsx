import React, { ReactNode, HTMLProps } from 'react';

import './Button.scss';

type Props = HTMLProps<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'fill' | 'outline';
  type: 'submit' | 'button' | 'reset';
}

const Button:React.FC<Props> = ({
  children, variant = 'fill', type = 'button', ...props
}) => (
  <button {...props} type={type} className={`button ${variant}`}>
    {children}
  </button>
);

export default Button;
