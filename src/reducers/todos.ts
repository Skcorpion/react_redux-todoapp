import { ActionTypes, Actions, FilterTypes } from '../utils/actionTypes';
import { IById, ITodos } from '../utils/interfaces';
import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state: IById = {}, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
    case ActionTypes.TOGGLE_TODO:
      return { ...state, [action.id]: todo(state[action.id], action) };
    default:
      return state;
  }
};

const allIds = (state: string[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

export default combineReducers({ byId, allIds });

const getAllTodos = (state: ITodos) => state.allIds.map((id) => state.byId[id]);

//selector
export const getVisibleTodos = (state: ITodos, filter: string) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return allTodos;
    case FilterTypes.SHOW_COMPLETED:
      return allTodos.filter((t) => t.completed);
    case FilterTypes.SHOW_ACTIVE:
      return allTodos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
