import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBfl-QuX3_Uj8zMO-IN8dFwVdlda_ystrk',
  authDomain: 'minemeal-6afb2.firebaseapp.com',
  databaseURL: 'https://minemeal-6afb2.firebaseio.com',
  projectId: 'minemeal-6afb2',
  storageBucket: 'minemeal-6afb2.appspot.com',
  messagingSenderId: '221817029199',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
