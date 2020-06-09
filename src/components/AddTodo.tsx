import React, { FC, Dispatch } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Actions } from '../utils/actionTypes';

type Props = {
  dispatch: Dispatch<Actions>;
};

const AddTodo: FC<Props> = ({ dispatch }) => {
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
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
