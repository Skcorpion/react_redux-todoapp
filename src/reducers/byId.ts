import { IById } from '../utils/interfaces';
import { Actions, ActionTypes } from '../utils/actionTypes';

export default (state: IById = {}, action: Actions) => {
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

export const getTodo = (state: IById, id: string) => state[id];
