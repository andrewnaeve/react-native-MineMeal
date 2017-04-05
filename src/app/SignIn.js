import React, { Component } from 'react';
import { StyleSheet,
          Keyboard,  
          Text, TextInput, 
          View, 
          Image, 
          TouchableOpacity, 
          TouchableWithoutFeedback,
          KeyboardAvoidingView, 
          LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Components } from 'expo';
import { height, width, containerWidth, block, RStyles } from './assets/styles/style'; 
const { LinearGradient } = Components;





export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      passwordCheck: '',
      visibleHeight: height,
      topLogo: {height: 300, width: 300},
    })
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = height - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 200, height: 200 }
    })
  }

  keyboardDidHide(e) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: height,
      topLogo: { width: 300, height: 300 }
    })
  }

  changeEmail(text) {
    this.setState({
      email: text
    })
  }
  changePassword(text) {
    this.setState({
      password: text
    })
  }
  checkPassword(text) {
    this.setState({
      passwordCheck: text
    })
  }

  handleSignUp() {
    
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient style={[styles.container, {height: this.state.visibleHeight}]} colors={['#ffffff', '#04bff3']}>
          <Image style={[styles.logo, this.state.topLogo]} source={require("./assets/img/mine_final.png")}/>
          <View>
          
          <View style={styles.form}>
            <View style={styles.wrap}>
              <TextInput style={styles.input} type={'email-address'} placeholder="Email" onChangeText={(text) => this.changeEmail(text)}/>
            </View>

                <View style={styles.wrap}>
                  <TextInput style={[styles.input, 
                    this.state.password === this.state.passwordCheck ? null : styles.red]} 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    onChangeText={(text) => this.changePassword(text)}/>
                </View>
                <View style={styles.wrap}>
                  <TextInput style={[styles.input, 
                    this.state.password === this.state.passwordCheck ? null : styles.red]} 
                    placeholder="Password" secureTextEntry={true} 
                    onChangeText={(text) => this.checkPassword(text)}/>
                </View>
              </View>
            
              
          </View>
          <TouchableOpacity activeOpacity={.7} onPress={this.handleSignUp}>
            <LinearGradient
              colors={['#fcb755', '#fcaa58', '#fca226']}
              style={styles.button}>
              <Text style={styles.text}>
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          
        </LinearGradient>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    height: height,
    alignItems: 'center',       
  },
  logo: {
    resizeMode: 'cover',
  },
  input: {
    borderColor: '#F8F8F8',
    borderWidth: 1,
    height: 35,
    width: width * .8,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
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
    
  }
}