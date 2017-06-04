import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ListView,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

import {
  height,
  width,
  containerWidth,
  block,
  RStyles,
} from '../assets/styles/style';

export default class MenuModal extends Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    const dataSource = ds.cloneWithRows(props.navigation.state.params.menu);
    this.state = {
      dataSource: dataSource,
      rowCount: dataSource.getRowCount(),
    };
    console.log('color', props.navigation.state.params.color);
  }

  handleChoice(choice) {
    this.props.navigation.state.params.handleChoice(choice);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        initialListSize={this.state.rowCount}
        renderSeparator={(sectionId, rowId) => (
          <View
            key={rowId}
            style={[styles.separator, this.props.navigation.state.params.color]}
          />
        )}
        renderRow={rowData => (
          <TouchableOpacity
            style={[this.props.navigation.state.params.color, styles.selector]}
            onPress={() => {
              this.handleChoice(rowData);
            }}
          >
            <View style={styles.wrapper}>
              <Image
                source={require('../assets/img/dinner.png')}
                style={styles.pic}
              />
              <Text style={styles.text}>{rowData}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: 'transparent',
    height: 60,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pic: {
    width: 50,
    height: 50,
    marginLeft: 20,
    resizeMode: 'cover',
  },
  text: {
    backgroundColor: 'transparent',
    fontFamily: 'Helvetica',
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 30,
  },
  separator: {
    width: containerWidth,
    alignSelf: 'center',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
