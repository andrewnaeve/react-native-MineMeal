import { APP_READY, ASSETS_READY, NOT_READY, ONCE_ONLY } from './types';

export const assetsReady = () => {
  return dispatch => {
    dispatch({ type: 'ASSETS_READY' });
  };
};

export const appReady = () => {
  return dispatch => {
    dispatch({ type: 'APP_READY' });
  };
};

export const notReady = () => {
  return dispatch => {
    dispatch({ type: 'NOT_READY' });
  };
};
