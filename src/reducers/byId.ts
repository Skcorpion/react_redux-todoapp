import { IById } from '../utils/interfaces';
import { Actions, ActionTypes } from '../utils/actionTypes';

export default (state: IById = {}, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_SUCCESS:
      const nextState = { ...state };
      action.response.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case ActionTypes.ADD_TODO_SUCCESS:
    case ActionTypes.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response,
      };

    default:
      return state;
  }
};

export const getTodo = (state: IById, id: string) => state[id];
