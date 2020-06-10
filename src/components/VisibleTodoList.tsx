import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';
import { RootState } from '../utils/interfaces';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

type Props = {
  filter: string;
};

class VisibleTodoList extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    fetchTodos(this.props.filter).then((todos) =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps: ConnectedProps<typeof connector>) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then((todos) =>
        console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const filter = ownProps.filter;
  return {
    todos: getVisibleTodos(state, ownProps.filter),
    filter,
  };
};

const connector = connect(mapStateToProps, { onTodoClick: toggleTodo });
export default connector(VisibleTodoList);
