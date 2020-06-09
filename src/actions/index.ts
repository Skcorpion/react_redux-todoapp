import { v4 } from 'node-uuid';
import { ActionTypes, Actions } from '../utils/actionTypes';

/*
 * action creators
 */
export const addTodo = (text: string): Actions => ({
  type: ActionTypes.ADD_TODO,
  id: v4(),
  text,
});

export const toggleTodo = (id: string): Actions => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});
