import { ITodo } from './interfaces';

/*
 * action types
 */
export enum ActionTypes {
  RECEIVE_TODOS = 'RECEIVE_TODOS',
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

/*
 * other constants
 */
export enum FilterTypes {
  SHOW_ALL = 'all',
  SHOW_COMPLETED = 'completed',
  SHOW_ACTIVE = 'active',
}

/*
 * actions
 */
interface ReceiveTodosAction {
  type: typeof ActionTypes.RECEIVE_TODOS;
  filter: string;
  response: ITodo[];
}
interface AddTodoAction {
  type: typeof ActionTypes.ADD_TODO;
  id: string;
  text: string;
}
interface ToggleTodoAction {
  type: typeof ActionTypes.TOGGLE_TODO;
  id: string;
}

export type Actions = ReceiveTodosAction | AddTodoAction | ToggleTodoAction;
