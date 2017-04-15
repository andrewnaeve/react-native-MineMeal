import Expo from 'expo';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Main from './src/app/containers/MainContainer';
import { startListeningToAuthChanges } from './src/app/actions/auth';

import Loading from './src/app/components/Loading';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

class AppContainer extends React.Component {

  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    // if (!this.state.appIsReady) {
    //   return <Loading />;
    // }

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./src/app/assets/img/mine_final_logo.png'),
      require('./src/app/assets/img/mine_final.png'),
      require('./src/app/assets/img/mine_finalWORDS.png'),
      require('./src/app/assets/img/protein.png'),
      require('./src/app/assets/img/proteinFlavors.png'),
      require('./src/app/assets/img/vegetables.png'),
      require('./src/app/assets/img/starches.png'),
    ]);

    await Promise.all([
      ...imageAssets,
    ]);

    this.setState({appIsReady: true});
  }
}

// store.dispatch(startListeningToAuthChanges());

export default AppContainer;






