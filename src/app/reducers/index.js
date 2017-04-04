import { combineReducers } from 'redux';
import { protein, proteinFlavors, vegetables, starches, } from './menu';
import addMeal from './addMeal';

const rootReducer = combineReducers({ 
  protein,
  proteinFlavors,
  vegetables,
  starches,
  addMeal,
});

export default rootReducer;