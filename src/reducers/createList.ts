import { Actions, ActionTypes } from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { IFilter } from '../utils/interfaces';

export default (filter: string) => {
  const ids = (state: string[] = [], action: Actions) => {
    switch (action.type) {
      case ActionTypes.RECEIVE_TODOS:
        if (action.filter !== filter) {
          return state;
        }
        return action.response.map((todo) => todo.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action: Actions) => {
    switch (action.type) {
      case ActionTypes.REQUEST_TODOS:
        if (action.filter !== filter) {
          return state;
        }
        return action.filter !== filter ? state : true;
      case ActionTypes.RECEIVE_TODOS:
        if (action.filter !== filter) {
          return state;
        }
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ ids, isFetching });
};

export const getIds = (state: IFilter) => state.ids;
export const getIsFetching = (state: IFilter) => state.isFetching;