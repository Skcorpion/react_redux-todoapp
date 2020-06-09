import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';
import { RootState } from '../utils/interfaces';
import { getVisibleTodos } from '../reducers';

type Props = {
  filter: string;
};

const VisibleTodoList: FC<ConnectedProps<typeof connector>> = ({
  todos,
  onTodoClick,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  todos: getVisibleTodos(state, ownProps.filter),
});

const connector = connect(mapStateToProps, { onTodoClick: toggleTodo });
export default connector(VisibleTodoList);
