import { combineReducers } from 'redux';
import { protein, proteinFlavors, vegetables, starches } from './menu';
import auth from './auth';
import currentMeal from './menu';
import cart from './cart';
import appIsReady from './appIsReady';

const rootReducer = combineReducers({
  auth,
  currentMeal,
  cart,
  appIsReady,
});

export default rootReducer;
