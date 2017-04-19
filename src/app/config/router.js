import React from 'react';
import { StackNavigator } from 'react-navigation';
import Entry from '../components/Entry';
import SignIn from '../containers/SignInContainer';
import SignUp from '../containers/SignUpContainer';
import Order from '../Order';
import MenuModal from '../components/MenuModal'
import Selector from '../containers/SelectorContainer'
import Panel from '../components/Panel'

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

export const OrderForm = StackNavigator({

  OrderForm: {
    screen: Order
  },
  Selector: {
    screen: Selector
  },
  Panel: {
    screen: Panel
  },
  MenuModal: {
    screen: MenuModal
  },

}, {
  mode: 'modal',
  headerMode: 'none'
})

