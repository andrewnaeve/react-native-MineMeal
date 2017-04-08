import { ATTEMPTING_LOGIN, SIGN_IN, SIGN_OUT } from '../actions/types';
import initialState from '../../initial-state';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE'
      }
    case 'SIGN_OUT':
      return {
        signedIn: false,
        email: null,
      }
    case 'SIGN_IN':
      return {
        signedIn: true,
        email: action.email,
      }
    default:
      return state;
  } 
}