import { Actions, ActionTypes } from '../utils/actionTypes';

export default (filter: string) => {
  return (state: string[] = [], action: Actions) => {
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
};

export const getIds = (state: string[]) => state;
