import React from 'react';
import { StackNavigator } from 'react-navigation';
import Entry from '../components/Entry';
import SignIn from '../containers/SignInContainer';
import SignUp from '../containers/SignUpContainer';

export const Login = StackNavigator({
  Entry: {
    screen: Entry
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp
  }
}, {
    mode: 'modal',
    headerMode: 'none'  
  }
);