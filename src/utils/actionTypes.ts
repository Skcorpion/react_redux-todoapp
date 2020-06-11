import { ITodo } from './interfaces';

/*
 * action types
 */
export enum ActionTypes {
  REQUEST_TODOS = 'REQUEST_TODOS',
  RECEIVE_TODOS = 'RECEIVE_TODOS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
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
interface RequestTodosAction {
  type: typeof ActionTypes.REQUEST_TODOS;
  filter: string;
}
interface ReceiveTodosAction {
  type: typeof ActionTypes.RECEIVE_TODOS;
  filter: string;
  response: ITodo[];
}
interface FetchTodosFailureAction {
  type: typeof ActionTypes.FETCH_TODOS_FAILURE;
  filter: string;
  message: string;
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

export type Actions =
  | RequestTodosAction
  | ReceiveTodosAction
  | FetchTodosFailureAction
  | AddTodoAction
  | ToggleTodoAction;
