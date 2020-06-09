import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import { RootState } from '../utils/interfaces';

export const rootReducer = combineReducers({ todos });

export const getVisibleTodos = (state: RootState, filter: string) =>
  fromTodos.getVisibleTodos(state.todos, filter);
