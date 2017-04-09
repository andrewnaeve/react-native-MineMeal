import { ADD_MEAL } from '../actions/types';
import initialState from '../../initial-state';

const cart = (state = initialState.cart, action ) => {
  switch(action.type) {
    case ADD_MEAL:
      return [...state, action.meal];
    default:
      return state;
  }
};

export default cart;