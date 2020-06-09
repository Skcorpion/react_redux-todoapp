import React, { FC } from 'react';

type Props = {
  onClick: () => void;
  completed: boolean;
  text: string;
};

const Todo: FC<Props> = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
};

export default Todo;
