import React, { HTMLProps } from 'react';
import classNames from 'classnames';

import './TextInput.scss';

type Props = HTMLProps<HTMLInputElement>;

const TextInput:React.FC<Props> = ({ className, ...props }) => (
  <input type="text" {...props} className={classNames('textInput', className)} />
);

export default TextInput;
