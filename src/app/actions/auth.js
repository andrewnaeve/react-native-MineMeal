import { createAction } from 'redux-actions';
import { auth } from '../firebase';

import { ATTEMPTING_LOGIN, FIREBASE_ERROR, SIGN_IN, SIGN_OUT } from './types';

export const signIn = (email, password) => {
  return (dispatch) => {

    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithEmailAndPassword(email, password)
    .then(function(user) {
      dispatch(signedIn(user))
      console.log('the user is', user)
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(error)
      dispatch({ type: 'ANONYMOUS' });
      dispatch(firebaseError(errorMessage));
      }
    );
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('the user is', user);
      dispatch(signedIn(user));
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log('error report: ', errorCode, errorMessage)
      dispatch({ type: 'ANONYMOUS' });
      dispatch(firebaseError(errorMessage));
      }
    );
  };
};

export const firebaseError = (error) => {
  return (dispatch) => {
    dispatch({ type: 'FIREBASE_ERROR', error: error })
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
