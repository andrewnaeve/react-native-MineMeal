import { APP_IS_READY } from './types';

export const appIsReady = (bool) => {
  return (dispatch) => {
    dispatch({ type: 'APP_IS_READY' })
  };
};