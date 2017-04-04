import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import CartModal from './CartModal';
import Icon from 'react-native-vector-icons/Ionicons';
import { containerWidth } from '../assets/styles/style';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <Icon style={styles.icon} name="md-cart" size={30} color="#00bff3" />
    );
}

class ShoppingIcon extends Component {
   constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  handlePress() {
    this.setState({
      modalVisible: true,
    })
    {console.log('i was pressed')}
  }

  closeModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  render() {
    return(
      <View style={styles.container} onPress={this.handlePress.bind(this)}>
      <TouchableOpacity onPress={this.closeModal.bind(this)}>
      <CartModal visible={this.state.modalVisible} closeModal={this.closeModal.bind(this)}/>
        <Cart />
        <View style={styles.circle}>
          <Text style={styles.text}>{this.props.addMeal.length}</Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    addMeal: state.addMeal,
  }
};

export default connect(mapStateToProps)(ShoppingIcon);
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
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
})