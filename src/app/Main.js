import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';
import { Login } from './config/router';
import { connect } from 'react-redux';
import { appReady } from './actions/appReady';

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
};

class Main extends Component {

  constructor(props) {
    super(props)

  }
  
  checkLogInStatus() {
    console.log('checking...');
    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      if (user_data != null) {
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if (error) {
            console.log(error)
          } else {
            this.props.signedIn(authData)
          }
        });
      } else {
        console.log('nope')
      }
    });
  }

  componentWillMount() {
    this._loadAssetsAsync();
    this.checkLogInStatus();
    this.props.appReady();
  }

  render() {
    console.log('ads', this.props.appIsReady)
    if (!this.props.appIsReady) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }


  async _loadAssetsAsync() {
    let that = this;
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
    this.props.appReady();
  }
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};