import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';

import Main from './src/app/Main';
import { startListeningToAuthChanges } from './src/app/actions/auth';

store.dispatch(startListeningToAuthChanges());
const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);



export default App;