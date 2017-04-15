import React, { Component } from 'react';
import { View } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';
import { Login } from './config/router';

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

class Main extends Component {
  constructor(props) {
    super(props)
  }

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
      <View style={styles.container}>
        <Login />
      </View>
    );
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/img/mine_final_logo.png'),
      require('./assets/img/mine_final.png'),
      require('./assets/img/mine_finalWORDS.png'),
      require('./assets/img/protein.png'),
      require('./assets/img/proteinFlavors.png'),
      require('./assets/img/vegetables.png'),
      require('./assets/img/starches.png'),
    ]);

    await Promise.all([
      ...imageAssets,
    ]);

    this.setState({appIsReady: true});
  }
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};