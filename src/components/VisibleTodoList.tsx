import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../actions';
import Todo from './Todo';
import { RootState } from '../utils/interfaces';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

type Props = {
  filter: string;
};

class VisibleTodoList extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: ConnectedProps<typeof connector>) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(this.props.filter).then((todos) => receiveTodos(filter, todos));
  }

  render() {
    const { todos, toggleTodo: onTodoClick } = this.props;
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

const connector = connect(mapStateToProps, actions);
export default connector(VisibleTodoList);
