import { APP_IS_READY } from '../actions/types';
import initialState from '../../initial-state';

export default function appIsReady(state = initialState, action) {
  switch(action.type) {
    case 'APP_IS_READY':
      return {
        appIsReady: true,
      }
    default:
      return state;
  }
};