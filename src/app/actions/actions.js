import { createAction } from 'redux-actions';

import * as types from './types';


export const updateProtein = (protein) => (
  createAction(types.UPDATE_PROTEIN)(protein)
);

export const updateProteinFlavors = (proteinFlavors) => (
  createAction(types.UPDATE_PROTEINFLAVORS)(proteinFlavors)
);

export const updateVegetables = (vegetables) => (
  createAction(types.UPDATE_VEGETABLES)(vegetables)
);

export const updateStarches = (starches) => (
  createAction(types.UPDATE_STARCHES)(starches)
);

export const addMeal = (meal) => (
  createAction(types.ADD_MEAL)(meal)
);

export const clearMeal = () => (
  createAction(types.CLEAR_MEAL)()
);

export const allowMeal = (bool) => (
  createAction(types.ALLOW_MEAL)(bool)
);


