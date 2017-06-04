import Expo from 'expo';
import './ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Main from './app/containers/MainContainer';
import Loading from './app/components/Loading';

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default AppContainer;
