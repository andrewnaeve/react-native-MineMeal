import { ATTEMPTING_LOGIN, SIGN_IN, SIGN_OUT, FIREBASE_ERROR } from '../actions/types';
import initialState from '../../initial-state';

export default function auth(state = initialState.auth, action) {

  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
      };
    case 'SIGN_OUT':
      return {
        status: 'ANONYMOUS',
        email: '',
        loggedIn: false,
      };
    case 'SIGN_IN':
      return {
        status: 'SIGNED_IN',
        loggedIn: true,
        email: action.email,
      };
    case 'FIREBASE_ERROR':
      return {
        error: action.error,
      };
    default:
      return state;
  };
};