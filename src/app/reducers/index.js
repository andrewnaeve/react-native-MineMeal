import { combineReducers } from 'redux';
import { protein, proteinFlavors, vegetables, starches, } from './menu';
import addMeal from './addMeal';
import authReducer from './auth';

const rootReducer = combineReducers({ 
  protein,
  proteinFlavors,
  vegetables,
  starches,
  addMeal,
  authReducer,
});

export default rootReducer;