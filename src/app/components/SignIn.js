import React, { Component } from 'react';
import { StyleSheet,
          Keyboard,  
          Text, TextInput, 
          View, 
          Image, 
          TouchableOpacity, 
          TouchableWithoutFeedback,
          Modal,
          LayoutAnimation } from 'react-native';
import { Components } from 'expo';

import firebase from '../firebase';

import { height, width, containerWidth, block, RStyles } from '../assets/styles/style'; 
import Icon from 'react-native-vector-icons/Ionicons';
const { LinearGradient } = Components;

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      visibleHeight: height,
      topLogo: {height: 300, width: 300},
      error: null,
    })
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  back() {
    this.props.closeSignIn()
  }

  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow (e) {
    let newSize = height - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 250, height: 250 },
      isKeyboardOpened: true,
    })
    LayoutAnimation.easeInEaseOut()
  }

  keyboardWillHide(e) {
    this.setState({
      visibleHeight: height,
      topLogo: { width: 300, height: 300 },
      isKeyboardOpened: false,
    })
    LayoutAnimation.easeInEaseOut()
  }

  handleSignIn() {
    firebase.auth().signInWithEmailAndPassword(this.state.email.trim().toLowerCase(), this.state.password)
    .then(function(user) {
      console.log('success')
      console.log('the user is', user)
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if(error) {
          this.setState({
            error: errorMessage,
          })
        }
      }.bind(this)
    )

    this.setState({
      email: '',
      password: '',
    })
    this.refs['password'].setNativeProps({text: ''})
  }

  render() {
    return (
      <Modal animationType={"fade"}
             transparent={false}
             visible={this.props.visible}>
      
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{height: this.state.visibleHeight}}>
          <LinearGradient style={styles.container} colors={['#F7F7F7', '#F7F7F7', '#FF5B37']}>

              <Icon style={styles.back} name="ios-arrow-back" size={45} color="#fca226" onPress={this.back.bind(this)}/>
              <Image style={[styles.logo, this.state.topLogo]} source={require("../assets/img/mine_finalWORDS.png")}/>
              
              <View><Text style={styles.errorText}>{this.state.error}</Text></View>
              <View style={styles.form}>
                <View style={styles.wrap}>
                  <TextInput style={styles.input} keyboardType={'email-address'} placeholder="Email" onChangeText={(text) => this.setState({email: text})}/>
                  <Icon style={styles.icons} name="md-mail" size={25} color="#D7D7D7" />
                </View>

                  <View style={styles.wrap}>
                    <TextInput style={styles.input}
                      keyboardType={'default'}
                      ref={'password'}
                      placeholder="Password" 
                      secureTextEntry={true} 
                      onChangeText={(text) => this.setState({password: text})}/>
                    <Icon style={[styles.icons, styles.lock]} name="md-lock" size={25} color="#D7D7D7" />
                  </View>

                </View>

              <TouchableOpacity activeOpacity={.7} onPress={this.handleSignIn}>
                <LinearGradient
                  colors={['#fcb755', '#fcaa58', '#fca226']}
                  style={styles.button}>
                  <Text style={styles.text}>
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableWithoutFeedback>
      </Modal>
    )
  };
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',


  },
  header: {
    flexDirection: 'row',
  },
  logo: {
    resizeMode: 'cover',
    marginTop: -40,
  },
  icons: {
    position: 'absolute',
    top: 5,
    left: 7,
    backgroundColor: 'transparent',
  },
  lock: {
    left: 10,
  },
  input: {
    borderColor: '#F8F8F8',
    borderWidth: 1,
    height: 35,
    width: width * .8,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 35,
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
  form: {
    justifyContent: 'center',
  },
  green: {
    borderColor: 'green',
    borderWidth: 2,
  },
  red: {
    borderColor: 'red'
  },
  label: {
    backgroundColor: 'transparent',
  },
  wrap: {
    marginBottom: 10,

  },
  button: {
    height: 35,
    backgroundColor: 'transparent',
    width: width * .8,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  back: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 25,
    left: 20,
  }
}