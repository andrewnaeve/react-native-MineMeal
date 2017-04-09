import { UPDATE_PROTEIN,
        UPDATE_PROTEINFLAVORS,
        UPDATE_VEGETABLES,
        UPDATE_STARCHES,
        CLEAR_MEAL,
      } from '../actions/types';

import initialState from '../../initial-state';

export default function currentMeal(state = initialState.currentMeal, action) {

  switch(action.type) {
    case 'UPDATE_PROTEIN':
      return {
        ...state, protein: action.protein
      }
    case 'UPDATE_PROTEINFLAVORS':
      return {
        ...state, proteinFlavors: action.proteinFlavors,
      }
    case 'UPDATE_VEGETABLES':
      return {
        ...state, vegetables: action.vegetables,
      }
    case 'UPDATE_STARCHES':
      return {
        ...state, starches: action.starches,
      }
    case 'CLEAR_MEAL':
      return {
        protein: '',
        proteinFlavors: '',
        vegetables: '',
        starches: '',
      }
    default:
      return state;
  }
};

// export const proteinFlavors= ( state = '', action ) => {
//   switch(action.type) {
//     case UPDATE_PROTEINFLAVORS:
//       return action.payload;
//     case CLEAR_MEAL:
//       return '';
//     default: 
//       return state;
//   }
// };

// export const vegetables = ( state = '', action ) => {
//   switch(action.type) {
//     case UPDATE_VEGETABLES:
//       return action.payload;
//     case CLEAR_MEAL:
//       return '';
//     default:
//       return state;
//   }
// };

// export const starches = ( state = '', action ) => {
//   switch(action.type) {
//     case UPDATE_STARCHES:
//       return action.payload;
//     case CLEAR_MEAL:
//       return '';
//     default: 
//       return state;
//   }
// };

// export const addMeal = (state = [], action ) => {
//   switch(action.type) {
//     case ADD_MEAL:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };