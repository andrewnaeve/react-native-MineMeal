import { APP_READY } from './types';

export const appReady = (bool) => {
  return (dispatch) => {
    dispatch({ type: 'APP_IS_READY' })
  };
};