import { ALLOW_MEAL } from '../actions/types';

const allowMeal = (state = false, action ) => {
  switch(action.type) {
    case ALLOW_MEAL:
      return action.payload;
    default:
      return state;
  }
};

export default allowMeal;