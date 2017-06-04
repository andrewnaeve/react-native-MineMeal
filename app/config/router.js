import React from 'react';
import { StackNavigator } from 'react-navigation';
import Entry from '../containers/EntryContainer';
import SignIn from '../containers/SignInContainer';
import SignUp from '../containers/SignUpContainer';
import Order from '../containers/OrderContainer';
import MenuModal from '../components/MenuModal';
import Selector from '../containers/SelectorContainer';
import Panel from '../components/Panel';

export const Login = StackNavigator(
  {
    Entry: {
      screen: Entry,
    },
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true,
    },
  },
);

export const OrderForm = StackNavigator(
  {
    OrderForm: {
      screen: Order,
    },
    MenuModal: {
      screen: MenuModal,
    },
  },
  {
    headerMode: 'none',
  },
);
