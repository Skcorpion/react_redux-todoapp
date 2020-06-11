import { v4 } from 'node-uuid';
import { ActionTypes, Actions } from '../utils/actionTypes';
import { ITodo, RootState } from '../utils/interfaces';
import * as api from '../api';
import { Dispatch } from 'react';
import { getIsFetching } from '../reducers';

/*
 * action creators
 */
const requestTodos = (filter: string): Actions => ({
  type: ActionTypes.REQUEST_TODOS,
  filter,
});

const receiveTodos = (filter: string, response: ITodo[]): Actions => ({
  type: ActionTypes.RECEIVE_TODOS,
  filter,
  response,
});

const fetchTodosFailure = (filter: string, message: string): Actions => ({
  type: ActionTypes.FETCH_TODOS_FAILURE,
  filter,
  message: message || 'Something went wrong.',
});

export const fetchTodos = (filter: string) => (
  dispatch: Dispatch<Actions>,
  getState: () => RootState
) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(
    (response) => {
      dispatch(receiveTodos(filter, response));
    },
    (error) => {
      dispatch(fetchTodosFailure(filter, error.message));
    }
  );
};

export const addTodo = (text: string): Actions => ({
  type: ActionTypes.ADD_TODO,
  id: v4(),
  text,
});

export const toggleTodo = (id: string): Actions => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});
