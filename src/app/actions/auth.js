import { createAction } from 'redux-actions';
import { auth } from '../firebase';

import { ATTEMPTING_LOGIN } from './types';

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithEmailAndPassword(this.state.email.trim().toLowerCase(), this.state.password);
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.createUserWithEmailAndPassword(this.state.email.trim().toLowerCase(), this.state.password);
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signOut();
  };
};

const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    email: user.email,
  };
};

const signedOut = (user) => {
  return {
    type: 'SIGN_OUT'
  };
};

export const startListeningToAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        {console.log('pleasehellow')}
        console.log('the userdispatch', user)
        dispatch(signedIn(user));
      } else {
        dispatch(signedOut())
        console.log('asdf')
      };
    });
  };
};