import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';
import { Login } from './config/router';
import { connect } from 'react-redux';
import { appIsReady, signedIn } from './actions/actions';

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
        console.log(this.props.appIsReady)
      }
    });
  }

  componentWillMount() {
    this._loadAssetsAsync();
    this.checkLogInStatus();

  }

  render() {
    console.log('ads', this.props.appIsReady)
    // if (!this.props.appIsReady) {
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
    this.props.appIsReady();

  }
};

const mapStateToProps = ({ appIsReady, auth }) => {
  return { appIsReady, auth }
};

const mapDispatchToProps = (dispatch) => {
  return {
    appReady() { dispatch(appReady()); },
    signedIn(user) { dispatch(signedIn(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);



const styles = {
	container: {
		flex: 1,       
	}
};