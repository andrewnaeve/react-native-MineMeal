import {
  ASSETS_READY,
  APP_READY,
  NOT_READY,
  SIGN_IN,
  SIGN_OUT,
  ONCE_ONLY,
} from '../actions/types';
import initialState from '../initial-state';

const appIsReady = (state = initialState.appIsReady, action) => {
  switch (action.type) {
    case 'ASSETS_READY':
      return {
        ...state,
        assets: true,
      };
    case 'APP_READY':
      return {
        ...state,
        app: true,
      };
    case 'NOT_READY':
      return {
        ...state,
        app: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        app: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        app: false,
      };
    default:
      return state;
  }
};

export default appIsReady;
