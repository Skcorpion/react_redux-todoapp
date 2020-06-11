import { ITodo } from './interfaces';

/*
 * action types
 */
export enum ActionTypes {
  FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS',
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
interface FetchTodosRequestAction {
  type: typeof ActionTypes.FETCH_TODOS_REQUEST;
  filter: string;
}
interface FetchTodosSuccessAction {
  type: typeof ActionTypes.FETCH_TODOS_SUCCESS;
  filter: string;
  response: ITodo[];
}
interface FetchTodosFailureAction {
  type: typeof ActionTypes.FETCH_TODOS_FAILURE;
  filter: string;
  message: string;
}
interface AddTodoSuccessAction {
  type: typeof ActionTypes.ADD_TODO_SUCCESS;
  response: ITodo;
}
interface ToggleTodoSuccessAction {
  type: typeof ActionTypes.TOGGLE_TODO_SUCCESS;
  response: ITodo;
}

export type Actions =
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | AddTodoSuccessAction
  | ToggleTodoSuccessAction;
