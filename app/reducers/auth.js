import {
  ATTEMPTING_LOGIN,
  SIGN_IN,
  SIGN_OUT,
  FIREBASE_ERROR,
  ANONYMOUS,
} from '../actions/types';
import initialState from '../initial-state';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        ...state,
        status: 'AWAITING_AUTH_RESPONSE',
      };
    case 'SIGN_OUT':
      return {
        ...state,
        status: 'ANONYMOUS',
        email: '',
        loggedIn: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        status: 'SIGNED_IN',
        loggedIn: true,
        email: action.email,
      };
    case 'ANONYMOUS':
      return {
        ...state,
        status: 'ANONYMOUS',
        loggedIn: false,
      };
    case 'FIREBASE_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
