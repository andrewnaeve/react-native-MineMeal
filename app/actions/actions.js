import {
  UPDATE_PROTEIN,
  UPDATE_PROTEINFLAVORS,
  UPDATE_VEGETABLES,
  UPDATE_STARCHES,
  ADD_MEAL,
  CLEAR_MEAL,
} from './types';

export const updateProtein = protein => {
  return dispatch => {
    dispatch({ type: 'UPDATE_PROTEIN', protein: protein });
  };
};
export const updateProteinFlavors = proteinFlavors => {
  return dispatch => {
    dispatch({ type: 'UPDATE_PROTEINFLAVORS', proteinFlavors: proteinFlavors });
  };
};
export const updateVegetables = vegetables => {
  return dispatch => {
    dispatch({ type: 'UPDATE_VEGETABLES', vegetables: vegetables });
  };
};
export const updateStarches = starches => {
  return dispatch => {
    dispatch({ type: 'UPDATE_STARCHES', starches: starches });
  };
};

export const addMeal = meal => {
  return dispatch => {
    dispatch({ type: 'ADD_MEAL', meal: meal });
    dispatch(clearMeal());
  };
};

export const clearMeal = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_MEAL' });
  };
};

export const deleteMeal = index => {
  return dispatch => {
    dispatch({ type: 'DELETE_MEAL', index: index });
  };
};
