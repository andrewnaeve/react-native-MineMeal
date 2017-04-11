import { BACK } from './types';

export const back = () => {
  return (dispatch) => {
    dispatch({ type: 'BACK' })
  };
};