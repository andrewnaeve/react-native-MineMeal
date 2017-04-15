import React, { Component } from 'react';
import { StyleSheet,
          Keyboard,  
          Text, TextInput, 
          View, 
          Image, 
          TouchableOpacity, 
          LayoutAnimation } from 'react-native';

import { Components } from 'expo';
const { LinearGradient } = Components;

import SignUp from '../containers/SignUpContainer';
import SignIn from '../containers/SignInContainer';
import LogInButtons from './ui/LogInButtons';

import * as stylings from '../assets/styles/style'; 

export default class Entry extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props) {
    super(props)

    this.signInNav = this.signInNav.bind(this);
    this.signUpNav = this.signUpNav.bind(this);
    
  };


  signInNav() {
    this.props.navigation.navigate('SignIn');
  }
  signUpNav() {
    this.props.navigation.navigate('SignUp');
  }


  render() {
    return (

      <LinearGradient style={styles.container} colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}>
        <Image style={styles.logo} source={require("../assets/img/mine_final.png")}/>
          <View style={styles.outer}>
            <View style={styles.inner}>

              <LogInButtons onPress={this.signInNav}>
                Sign In
              </LogInButtons>

              <LogInButtons onPress={this.signUpNav}>
                Sign Up
              </LogInButtons>

            </View>
          </View>
        </LinearGradient>
    );
  };
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',    
  },
  inner: {
    width: stylings.width * .90,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  outer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: stylings.height * .10,
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
    width: stylings.width * .4,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 15, 
    alignItems: 'center', 
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
  }
}