import { ADD_MEAL, DELETE_MEAL } from '../actions/types';
import initialState from '../initial-state';

const cart = (state = initialState.cart, action) => {
  console.log('what', ...state);
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.meal];
    case DELETE_MEAL:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export default cart;
