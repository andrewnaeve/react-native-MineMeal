import React, { Component } from 'react';
import {
  StyleSheet,
  Keyboard,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import { Components } from 'expo';
const { LinearGradient } = Components;
import Loading from '../containers/LoadingContainer';
import SignUp from '../containers/SignUpContainer';
import SignIn from '../containers/SignInContainer';
import PairButtons from './ui/PairButtons';

import * as stylings from '../assets/styles/style';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.signInNav = this.signInNav.bind(this);
    this.signUpNav = this.signUpNav.bind(this);
    this.state = {
      once: true,
    };
  }

  signInNav() {
    this.props.navigation.navigate('SignIn');
  }

  signUpNav() {
    this.props.navigation.navigate('SignUp');
  }

  ready() {
    this.props.appReady();
  }

  render() {
    return (
      <View style={styles.container}>

        <Components.Video
          style={styles.video}
          source={require('../assets/video/food.mp4')}
          resizeMode="cover"
          onLoad={() => this.ready()}
          muted
          repeat
        />
        <Image
          style={styles.logo}
          source={require('../assets/img/mine_final.png')}
        />
        <View style={styles.outer}>
          <View style={styles.inner}>

            <PairButtons onPress={this.signInNav}>
              Sign In
            </PairButtons>

            <PairButtons onPress={this.signUpNav}>
              Sign Up
            </PairButtons>

          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: stylings.height,
    width: stylings.width,
  },
  inner: {
    width: stylings.width * 0.90,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  outer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: stylings.height * 0.10,
  },
  logo: {
    resizeMode: 'cover',
    marginTop: -30,
    width: 500,
    height: 500,
  },
  button: {
    height: 50,
    backgroundColor: 'transparent',
    width: stylings.width * 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
  },
};
