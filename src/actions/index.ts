import { ActionTypes, Actions } from '../utils/actionTypes';
import { ITodo, RootState } from '../utils/interfaces';
import * as api from '../api';
import { Dispatch } from 'react';
import { getIsFetching } from '../reducers';

/*
 * action creators
 */
const fetchTodosRequest = (filter: string): Actions => ({
  type: ActionTypes.FETCH_TODOS_REQUEST,
  filter,
});

const fetchTodosSuccess = (filter: string, response: ITodo[]): Actions => ({
  type: ActionTypes.FETCH_TODOS_SUCCESS,
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

  dispatch(fetchTodosRequest(filter));

  return api.fetchTodos(filter).then(
    (response) => {
      dispatch(fetchTodosSuccess(filter, response));
    },
    (error) => {
      dispatch(fetchTodosFailure(filter, error.message));
    }
  );
};

const addTodoSuccess = (response: ITodo): Actions => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  response,
});

export const addTodo = (text: string) => (dispatch: Dispatch<Actions>) =>
  api.addTodo(text).then((response) => {
    dispatch(addTodoSuccess(response));
  });

const toggleTodoSuccess = (response: ITodo): Actions => ({
  type: ActionTypes.TOGGLE_TODO_SUCCESS,
  response,
});

export const toggleTodo = (id: string) => (dispatch: Dispatch<Actions>) =>
  api.toggleTodo(id).then((response) => {
    dispatch(toggleTodoSuccess(response));
  });
