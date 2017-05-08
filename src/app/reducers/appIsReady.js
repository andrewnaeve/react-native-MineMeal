import { APP_READY } from '../actions/types';
import initialState from '../../initial-state';

const appIsReady = (state = initialState.appIsReady, action) => {
  switch (action.type) {
    case APP_READY:
      return true;
    default:
      return state;
  }
};

export default appIsReady;
