import { createAction } from 'redux-actions';

import { UPDATE_PROTEIN, UPDATE_PROTEINFLAVORS,
         UPDATE_VEGETABLES, UPDATE_STARCHES,
         ADD_MEAL, CLEAR_MEAL } from './types';


// export const updateProtein = (protein) => (
//   createAction(types.UPDATE_PROTEIN)(protein)
// );

export const updateProtein = (protein) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_PROTEIN', protein: protein })
  };
};
export const updateProteinFlavors = (proteinFlavors) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_PROTEINFLAVORS', proteinFlavors: proteinFlavors })
  };
};
export const updateVegetables = (vegetables) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_VEGETABLES', vegetables: vegetables })
  };
};
export const updateStarches = (starches) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_STARCHES', starches: starches })
  };
};

export const addMeal = (meal) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_MEAL', meal: meal })
  }
}
// export const addMeal = (meal) => (
//   createAction(ADD_MEAL)(meal)
// );

// export const updateProteinFlavors = (proteinFlavors) => (
//   createAction(types.UPDATE_PROTEINFLAVORS)(proteinFlavors)
// );

// export const updateVegetables = (vegetables) => (
//   createAction(types.UPDATE_VEGETABLES)(vegetables)
// );

// export const updateStarches = (starches) => (
//   createAction(types.UPDATE_STARCHES)(starches)
// );


// export const clearMeal = () => (
//   createAction(types.CLEAR_MEAL)()
// );

// export const allowMeal = (bool) => (
//   createAction(types.ALLOW_MEAL)(bool)
// );


