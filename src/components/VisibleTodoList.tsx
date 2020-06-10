import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../actions';
import Todo from './Todo';
import { RootState } from '../utils/interfaces';
import { getVisibleTodos, getIsFetching } from '../reducers';

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { todos, isFetching, toggleTodo: onTodoClick } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

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
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  };
};

const connector = connect(mapStateToProps, actions);
export default connector(VisibleTodoList);
