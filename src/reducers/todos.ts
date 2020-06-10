import { ActionTypes, Actions, FilterTypes } from '../utils/actionTypes';
import { IById, ITodos } from '../utils/interfaces';
import { combineReducers } from 'redux';

const byId = (state: IById = {}, action: Actions) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_TODOS:
      const nextState = { ...state };
      action.response.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state: string[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_TODOS:
      if (action.filter !== FilterTypes.SHOW_ALL) {
        return state;
      }
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const completedIds = (state: string[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_TODOS:
      if (action.filter !== FilterTypes.SHOW_COMPLETED) {
        return state;
      }
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const activeIds = (state: string[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_TODOS:
      if (action.filter !== FilterTypes.SHOW_ACTIVE) {
        return state;
      }
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

export default combineReducers({ byId, idsByFilter });

//selector
export const getVisibleTodos = (state: ITodos, filter: string) => {
  const ids = state.idsByFilter[filter];
  return ids.map((id) => state.byId[id]);
};
