import React, { Component } from 'react';
import { StyleSheet,
          Keyboard,  
          Text, TextInput, 
          View, 
          Image, 
          TouchableOpacity, 
          LayoutAnimation } from 'react-native';
import { Components } from 'expo';

import SignUp from '../containers/SignUpContainer';
import SignIn from '../containers/SignInContainer';


import firebase from '../firebase';

import * as stylings from '../assets/styles/style'; 
import Icon from 'react-native-vector-icons/Ionicons';
const { LinearGradient } = Components;

export default class Entry extends Component {

  constructor(props) {
    super(props)
    this.state = {
      signInVisible: false,
      signUpVisible: false,
    };
    
  };

  handleSignIn() {
    this.setState({
      signInVisible: true,
    });
  };

  handleSignUp() {
    this.setState({
      signUpVisible: true,
    });
  };

  closeSignIn() {
    this.setState({
      signInVisible: false
    });
  };

  closeSignUp() {
    this.setState({
      signUpVisible: false
    });
  };

  render() {
    return (

        <LinearGradient style={styles.container} colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}>
          <Image style={styles.logo} source={require("../assets/img/mine_final.png")}/>
            <View style={styles.outer}>
              <View style={styles.inner}>

                <TouchableOpacity activeOpacity={.7} onPress={this.handleSignIn.bind(this)}>
                  <SignIn visible={this.state.signInVisible} closeSignIn={this.closeSignIn.bind(this)} />
                  <LinearGradient
                    colors={['#fcb755', '#fcaa58', '#fca226']}
                    style={styles.button}>
                    <Text style={styles.text}>
                      Sign In
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.7} onPress={this.handleSignUp.bind(this)}>
                  <SignUp visible={this.state.signUpVisible} closeSignUp={this.closeSignUp.bind(this)} />
                  <LinearGradient
                    colors={['#fcb755', '#fcaa58', '#fca226']}
                    style={styles.button}>
                    <Text style={styles.text}>
                      Sign Up
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>            

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