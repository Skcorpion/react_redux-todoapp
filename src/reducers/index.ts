import { FilterTypes } from '../utils/actionTypes';
import { RootState } from '../utils/interfaces';
import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList(FilterTypes.SHOW_ALL),
  active: createList(FilterTypes.SHOW_ACTIVE),
  completed: createList(FilterTypes.SHOW_COMPLETED),
});

export const rootReducer = combineReducers({ byId, listByFilter });

//selector
export const getVisibleTodos = (state: RootState, filter: string) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map((id) => fromById.getTodo(state.byId, id));
};
