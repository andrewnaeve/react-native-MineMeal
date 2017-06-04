import {
  UPDATE_PROTEIN,
  UPDATE_PROTEINFLAVORS,
  UPDATE_VEGETABLES,
  UPDATE_STARCHES,
  CLEAR_MEAL,
} from '../actions/types';

import initialState from '../initial-state';

export default function currentMeal(state = initialState.currentMeal, action) {
  switch (action.type) {
    case 'UPDATE_PROTEIN':
      return {
        ...state,
        protein: action.protein,
      };
    case 'UPDATE_PROTEINFLAVORS':
      return {
        ...state,
        proteinFlavors: action.proteinFlavors,
      };
    case 'UPDATE_VEGETABLES':
      return {
        ...state,
        vegetables: action.vegetables,
      };
    case 'UPDATE_STARCHES':
      return {
        ...state,
        starches: action.starches,
      };
    case 'CLEAR_MEAL':
      return {
        protein: '',
        proteinFlavors: '',
        vegetables: '',
        starches: '',
      };
    default:
      return state;
  }
}
