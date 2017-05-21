import Expo from 'expo';
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Order from './Order';
import CartModal from './components/CartModal';
import Entry from './components/Entry';
import Backdrop from './components/Backdrop';
import Loading from './containers/LoadingContainer';
import AboutDavid from './components/about/AboutDavid';
import { Login, OrderForm } from './config/router';
import { connect } from 'react-redux';
import { appReady, assetsReady } from './actions/appReady';
import { signIn, anonymous } from './actions/auth';
import { auth } from './firebase';

function cacheImages (images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts (fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  async checkLogInStatus () {

    let user_data = await AsyncStorage.getItem('user_data');
    let user = JSON.parse(user_data);
    if (user != null) {
       this.props.signIn(user.email, user.password);
    } else {
      this.props.anonymous();
    }
  }

  componentWillMount () {
    var that = this;
    this.checkLogInStatus();
    this._loadAssetsAsync()
    .then(
      this.props.assetsReady()
    );
  }


  render () {

    return (
      <View style={styles.container}>
        { this.props.auth.loggedIn === false && <Login /> }
        { this.props.auth.loggedIn === true && <OrderForm /> }
        <Loading />
      </View>
    );
  }



  async _loadAssetsAsync () {
    const imageAssets = cacheImages([
      require('./assets/img/mine_final_logo.png'),
      require('./assets/img/mine_final.png'),
      require('./assets/img/mine_finalWORDS.png'),
      require('./assets/img/protein.png'),
      require('./assets/img/proteinFlavors.png'),
      require('./assets/img/vegetables.png'),
      require('./assets/img/starches.png'),
      require('./assets/img/dinner.png'),
      require('./assets/img/veggies.jpg'),
      require('./assets/img/david.png'),
      require('./assets/img/cut2.jpg'),
      require('./assets/video/food.mp4')
    ]);

    await Promise.all([
      ...imageAssets
    ]);
  }
}

export default Main;

const styles = {
  container: {
    flex: 1,
  }
};
