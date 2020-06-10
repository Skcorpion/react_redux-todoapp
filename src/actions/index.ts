import { v4 } from 'node-uuid';
import { ActionTypes, Actions } from '../utils/actionTypes';
import { ITodo } from '../utils/interfaces';
import * as api from '../api';
import { Dispatch } from 'react';

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

export const fetchTodos = (filter: string) =>
  async function (dispatch: Dispatch<Actions>) {
    dispatch(requestTodos(filter));

    const response = await api.fetchTodos(filter);
    dispatch(receiveTodos(filter, response));
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
