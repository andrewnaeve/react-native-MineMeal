import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, Modal, ListView, TouchableOpacity } from 'react-native';
import { width, height, containerWidth } from '../assets/styles/style';
import { auth } from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';

Checkout = (props) => (
    <Icon style={styles.icon} name="md-cart" size={50} color="white" />
);

class CartModal extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(''),
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleSignOut == this.handleSignOut.bind(this);

  };

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource =  ds.cloneWithRows(props.cart);
    this.setState({
      dataSource: dataSource,
    });
  };

  handlePress() {
    this.props.closeModal()

  };

  handleSignOut() {
    this.props.signOut()
  };

  render() {
    return(
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Checkout />
          </View>
          <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(rowData) => <View style={styles.food}>
                                        <Text>Meal:</Text>
                                        <Text>Protein: {rowData.meal[0]}</Text>
                                        <Text>Protein Flavor: {rowData.meal[1]}</Text>
                                        <Text>Vegetables: {rowData.meal[2]}</Text>
                                        <Text>Starches: {rowData.meal[3]}</Text>
                                      </View>}
              
              />
          <TouchableOpacity onPress={this.handlePress}><Text style={styles.close}>Close</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.handleSignOut.bind(this)}><Text style={styles.close}>sign out</Text></TouchableOpacity>
        </View>
      </Modal> 
    );
  };
};

export default CartModal;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  header: {
    height: height * .15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,

  },
  food: {
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
})