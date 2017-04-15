import { combineReducers } from 'redux';
import { protein, proteinFlavors, vegetables, starches, } from './menu';

import auth from './auth';
import currentMeal from './menu';
import cart from './cart';
import appIsReadyReducer from './appIsReadyReducer';

const rootReducer = combineReducers({ 
  auth,
  currentMeal,
  cart,
  appIsReadyReducer
});

export default rootReducer;
