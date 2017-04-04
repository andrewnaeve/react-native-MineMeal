import { ADD_MEAL } from '../actions/types';

const addMeal = (state = [], action ) => {
  switch(action.type) {
    case ADD_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addMeal;