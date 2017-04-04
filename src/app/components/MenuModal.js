import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ListView, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { height, width, containerWidth, block, RStyles } from '../assets/styles/style'; 


export default class MenuModal extends Component {

  constructor(props) {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource =  ds.cloneWithRows(props.menu);
    this.state = {
      dataSource: dataSource,
      rowCount: dataSource.getRowCount(),
    };
  }

  handleChoice(choice) {
    this.props.handleChoice(choice)
  }

  render() {

    return(
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.visible}
        >
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          initialListSize={this.state.rowCount}
          renderSeparator={this._renderSeparator}
          renderRow={(rowData) => <TouchableOpacity style={[this.props.color, styles.selector]} onPress={() => {this.handleChoice(rowData)}}>
                                    <Text style={styles.text}>{rowData}</Text>
                                  </TouchableOpacity>}
        />
      </Modal> 
    )    
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selector: {
    
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 40,
    width: containerWidth * .65,
    borderWidth: 2,
    marginBottom: 10,
    justifyContent: 'center',
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontSize: 15,
  }
})

