import React, { Component } from 'react';
import { Alert, View, Text, Modal, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import * as stylings from '../../assets/styles/style';
import AddCheckout from './AddCheckout';
import { addMeal, clearMeal } from '../../actions/actions';


class FooterButtons extends Component {
  
  constructor(props) {
    super(props)
    }

  handleSubmit() {
    if(this.props.protein !== '' && this.props.proteinFlavor !== '' &&
      this.props.vegetables !== '' && this.props.starches !== '') {
        this.props.dispatch(addMeal({meal: [this.props.protein,
                                            this.props.proteinFlavors,
                                            this.props.vegetables,
                                            this.props.starches]}))
        this.props.dispatch(clearMeal())
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

const mapStateToProps = (state) => {
  return {
    protein: state.protein,
    proteinFlavors: state.proteinFlavors,
    vegetables: state.vegetables,
    starches: state.starches,
    addMeal: state.addMeal,
  }
};

export default connect(mapStateToProps)(FooterButtons);

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