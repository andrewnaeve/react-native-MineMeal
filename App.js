import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
// import firebaseConfig from './secrets/firebaseConfig';

import { Provider } from 'react-redux';
import { store } from './src/app/store';

import Main from './src/app/Main';

// firebase.initializeApp(firebaseConfig);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;