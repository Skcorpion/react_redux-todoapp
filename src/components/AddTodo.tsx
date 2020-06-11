import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo: FC<ConnectedProps<typeof connector>> = ({ addTodo }) => {
  let input: HTMLInputElement;
  return (
    <div>
      <input
        ref={(node) => {
          input = node!;
        }}
      />
      <button
        onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

const connector = connect(null, { addTodo });

export default connector(AddTodo);
