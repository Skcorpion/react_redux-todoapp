import { ITodo } from '../utils/interfaces';
import { Actions, ActionTypes } from '../utils/actionTypes';

export default (state: ITodo, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case ActionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};
