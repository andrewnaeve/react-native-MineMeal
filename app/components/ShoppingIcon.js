import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from './Logo';
import CartModal from '../containers/CartModalContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import { containerWidth } from '../assets/styles/style';
import { signOut } from '../actions/auth';

const Cart = props => (
  <Icon style={styles.icon} name="md-cart" size={40} color="#00bff3" />
);

class ShoppingIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.handlePress = this.handlePress.bind(this);
    this.springValue = new Animated.Value(1);
  }

  spring() {
    this.springValue.setValue(0.70);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  handlePress() {
    this.setState({
      modalVisible: true,
    });
  }

  closeModal() {
    this.setState({
      modalVisible: false,
    });
  }

  componentWillReceiveProps() {
    this.spring();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <CartModal
            visible={this.state.modalVisible}
            closeModal={this.closeModal.bind(this)}
          />
          <Cart />
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ scale: this.springValue }] },
            ]}
          >
            <Text style={styles.text}>{this.props.cart.length}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShoppingIcon;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    marginRight: 10,
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'transparent',
  },
  circle: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 55,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
});
