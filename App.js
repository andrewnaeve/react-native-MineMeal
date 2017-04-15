import Expo from 'expo';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Main from './src/app/containers/MainContainer';
import Loading from './src/app/components/Loading';


class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  };
}

export default AppContainer;






