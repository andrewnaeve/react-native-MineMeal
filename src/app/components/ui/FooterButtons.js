import React, { Component } from 'react';
import { Alert, View, Text, Modal, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import * as stylings from '../../assets/styles/style';
import AddCheckout from './AddCheckout';



class FooterButtons extends Component {
  
  constructor(props) {
    super(props)
  }

  handleSubmit() {

    console.log(this.props.cart)
    console.log('p', this.props.currentMeal.protein)
    if(this.props.currentMeal.protein !== '' && this.props.currentMeal.proteinFlavor !== '' &&
      this.props.currentMeal.vegetables !== '' && this.props.currentMeal.starches !== '') {
        this.props.addMeal({meal: [this.props.currentMeal.protein,
                                            this.props.currentMeal.proteinFlavors,
                                            this.props.currentMeal.vegetables,
                                            this.props.currentMeal.starches]})

      } else {
        Alert.alert('Order Incomplete', 'You\'re missing a food group!')
      }
  }
  

  render() {
    
    return(
      <View style={styles.container}>
        <View style={styles.inner}>

          <TouchableOpacity onPress={this.handleSubmit.bind(this)} disabled={false}>
            <AddCheckout style={styles.container}>
              <Text style={styles.buttonText}>Add Meal</Text>
            </AddCheckout>
          </TouchableOpacity>

          <TouchableOpacity disabled={false}>
            <AddCheckout>
              <Text style={styles.buttonText}>Checkout</Text>
            </AddCheckout>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

export default FooterButtons;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inner: {
    width: stylings.width * .95,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
  },

})