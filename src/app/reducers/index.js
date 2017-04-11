import { combineReducers } from 'redux';
import { protein, proteinFlavors, vegetables, starches, } from './menu';

import auth from './auth';
import currentMeal from './menu';
import cart from './cart';
import navigator from './navigator';

const rootReducer = combineReducers({ 
  auth,
  currentMeal,
  cart,
  navigator,
});

export default rootReducer;
