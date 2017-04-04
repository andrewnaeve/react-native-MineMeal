import { UPDATE_PROTEIN,
        UPDATE_PROTEINFLAVORS,
        UPDATE_VEGETABLES,
        UPDATE_STARCHES,
        CLEAR_MEAL,
      } from '../actions/types';


export const protein = ( state = '', action ) => {
  switch(action.type) {
    case UPDATE_PROTEIN:
      return action.payload;
    case CLEAR_MEAL:
      return '';
    default:
      return state;
  }
};

export const proteinFlavors= ( state = '', action ) => {
  switch(action.type) {
    case UPDATE_PROTEINFLAVORS:
      return action.payload;
    case CLEAR_MEAL:
      return '';
    default: 
      return state;
  }
};

export const vegetables = ( state = '', action ) => {
  switch(action.type) {
    case UPDATE_VEGETABLES:
      return action.payload;
    case CLEAR_MEAL:
      return '';
    default:
      return state;
  }
};

export const starches = ( state = '', action ) => {
  switch(action.type) {
    case UPDATE_STARCHES:
      return action.payload;
    case CLEAR_MEAL:
      return '';
    default: 
      return state;
  }
};

// export const addMeal = (state = [], action ) => {
//   switch(action.type) {
//     case ADD_MEAL:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };