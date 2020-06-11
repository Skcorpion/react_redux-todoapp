import { Actions, ActionTypes, FilterTypes } from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { IFilter } from '../utils/interfaces';

export default (filter: string) => {
  const ids = (state: string[] = [], action: Actions) => {
    switch (action.type) {
      case ActionTypes.FETCH_TODOS_SUCCESS:
        return filter === action.filter
          ? action.response.map((todo) => todo.id)
          : state;
      case ActionTypes.ADD_TODO_SUCCESS:
        return filter !== FilterTypes.SHOW_COMPLETED
          ? [...state, action.response.id]
          : state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action: Actions) => {
    switch (action.type) {
      case ActionTypes.FETCH_TODOS_REQUEST:
        if (action.filter !== filter) {
          return state;
        }
        return action.filter !== filter ? state : true;
      case ActionTypes.FETCH_TODOS_SUCCESS:
      case ActionTypes.FETCH_TODOS_FAILURE:
        if (action.filter !== filter) {
          return state;
        }
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state: string | null = null, action: Actions) => {
    switch (action.type) {
      case ActionTypes.FETCH_TODOS_FAILURE:
        if (action.filter !== filter) {
          return state;
        }
        return action.message;
      case ActionTypes.FETCH_TODOS_REQUEST:
      case ActionTypes.FETCH_TODOS_SUCCESS:
        if (action.filter !== filter) {
          return state;
        }
        return null;
      default:
        return state;
    }
  };

  return combineReducers({ ids, isFetching, errorMessage });
};

export const getIds = (state: IFilter) => state.ids;
export const getIsFetching = (state: IFilter) => state.isFetching;
export const getErrorMessage = (state: IFilter) => state.errorMessage;
