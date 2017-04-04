import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Modal, ListView, TouchableOpacity } from 'react-native';
import { width, height, containerWidth } from '../assets/styles/style';
import { connect } from 'react-redux';

class CartModal extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(''),
    };
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource =  ds.cloneWithRows(props.addMeal);
    this.setState({
      dataSource: dataSource,
    })
  }

  handlePress() {
    this.props.closeModal()
    {console.log(this.props.addMeal)}
  }

  render() {
    return(
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>Cart</Text>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <View styles={styles.food}>
                                        <Text>Meal:</Text>
                                        <Text>Protein: {rowData.meal[0]}</Text>
                                        <Text>Protein Flavor: {rowData.meal[1]}</Text>
                                        <Text>Vegetables: {rowData.meal[2]}</Text>
                                        <Text>Starches: {rowData.meal[3]}</Text>
                                      </View>}
              
              />
          <TouchableOpacity onPress={this.handlePress.bind(this)}><Text style={styles.close}>Close</Text></TouchableOpacity>
        </View>
      </Modal> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addMeal: state.addMeal,
  }
};

export default connect(mapStateToProps)(CartModal);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  header: {
    height: height * .15,
    backgroundColor: 'red',
    justifyContent: 'center',
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
  }
})