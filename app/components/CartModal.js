import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Modal,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { width, height, containerWidth } from '../assets/styles/style';
import { auth } from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import * as stylings from '../assets/styles/style';
import CartItem from '../containers/CartItemContainer';

Checkout = props => (
  <Icon style={styles.icon} name="md-cart" size={50} color="white" />
);

class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.cart,
    };

    this.handlePress = this.handlePress.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  _keyExtractor = (item, index) => item.id;

  componentWillReceiveProps(props) {
    let dataSource = props.cart;
    this.setState({
      dataSource: dataSource,
    });
  }

  handlePress() {
    this.props.closeModal();
  }

  handleSignOut() {
    this.props.signOut();
  }

  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={this.props.visible}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Checkout />
          </View>
          <View style={styles.food}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={this._keyExtractor}
              renderItem={(item, index) =>
                this._renderItemComponent(item, index)}
              ItemSeparatorComponent={index => (
                <View style={styles.separator} />
              )}
            />
          </View>
          <TouchableOpacity onPress={this.handlePress}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleSignOut.bind(this)}>
            <Text style={styles.close}>sign out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  _renderItemComponent = ({ item, index }) => (
    <CartItem item={item} index={index} />
  );
}

export default CartModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    height: height * 0.15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  food: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    width: stylings.width - 20,
    height: stylings.height * 0.6,
    flexDirection: 'column',
    marginBottom: 20,
  },
  close: {
    fontSize: 25,
    color: 'red',
  },
  icon: {
    marginTop: 10,
  },
  separator: {
    width: containerWidth,
    alignSelf: 'center',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
