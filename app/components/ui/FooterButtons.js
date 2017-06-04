import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as stylings from '../../assets/styles/style';
import AddCheckout from './AddCheckout';
import PairButtons from './PairButtons';

class FooterButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    if (
      this.props.currentMeal.protein !== '' &&
      this.props.currentMeal.proteinFlavor !== '' &&
      this.props.currentMeal.vegetables !== '' &&
      this.props.currentMeal.starches !== ''
    ) {
      this.props.addMeal({
        meal: [
          this.props.currentMeal.protein,
          this.props.currentMeal.proteinFlavors,
          this.props.currentMeal.vegetables,
          this.props.currentMeal.starches,
        ],
      });
    } else {
      Alert.alert('Order Incomplete', "You're missing a food group!");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>

          <PairButtons onPress={this.handleSubmit.bind(this)} disabled={false}>
            Add Meal
          </PairButtons>

          <PairButtons>
            Checkout
          </PairButtons>

        </View>
      </View>
    );
  }
}

export default FooterButtons;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inner: {
    width: stylings.width * 0.95,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: stylings.height * 0.05,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
});
