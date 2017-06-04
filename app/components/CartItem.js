import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';

class CartItem extends Component {
  constructor({ index, item, deleteMeal, cart }) {
    super({ index, item, deleteMeal });
    const swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'red',
        onPress: () => deleteMeal(index),
      },
    ];
    console.log('item', item);
    this.swipeoutBtns = swipeoutBtns;
    this.index = index;
    this.deleteMeal = deleteMeal;
    this.item = item;
  }
  componentWillReceiveProps({ item }) {
    this.item = item;
  }

  render() {
    return (
      <Swipeout
        right={this.swipeoutBtns}
        backgroundColor={'white'}
        key={this.index}
      >
        <View style={styles.container}>
          <Text style={[styles.header]}>Meal {this.index + 1} </Text>
          <Text style={[styles.indent, styles.text]}>
            {this.item.meal[1]}
            {' '}
            {this.item.meal[0]}
            {' '}
            with
            {' '}
            {this.item.meal[2]}
            {' '}
            and
            {' '}
            {this.item.meal[3]}
            {' '}
          </Text>
        </View>
      </Swipeout>
    );
  }
}

export default CartItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 10,
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Gotham',
  },
});
