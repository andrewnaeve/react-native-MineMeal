import { APP_READY } from './types';

export const appReady = () => {
  return (dispatch) => {
    dispatch({ type: 'APP_READY' })
  };
};