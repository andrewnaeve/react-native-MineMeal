import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { updateProtein, updateProteinFlavors, updateVegetables, updateStarches } from '../actions/actions';

import Panel from './Panel';

import { proteinMenu, proteinFlavorsMenu, vegetablesMenu, starchesMenu } from './Menus';

import { height, width, containerWidth, block, RStyles } from '../assets/styles/style'; 

class Selector extends Component {

  constructor(props) {
    super(props)
  }

  handleProteinChange(protein) {
    this.props.dispatch(updateProtein(protein))
  }

  handleProteinFlavorsChange(proteinFlavors) {
    this.props.dispatch(updateProteinFlavors(proteinFlavors))
  }

  handleVegetablesChange(vegetables) {
    this.props.dispatch(updateVegetables(vegetables))
  }

  handleStarchesChange(starches) {
    this.props.dispatch(updateStarches(starches))
  }

  render() {
    return(
      <View style={styles.fix}>
        <View style={styles.container}>
          <Panel style={styles.panel} color={styles.orangePanel} menu={proteinMenu} handleChoice={this.handleProteinChange.bind(this)}>
              {this.props.protein === '' ? <Image style={styles.image} source={require("../assets/img/protein.png")}></Image> : <Text style={RStyles.text}>{this.props.protein}</Text>}
          </Panel>
          <Panel color={styles.bluePanel} menu={proteinFlavorsMenu} handleChoice={this.handleProteinFlavorsChange.bind(this)}>
            {this.props.proteinFlavors === '' ? <Image style={styles.image} source={require("../assets/img/proteinFlavors.png")}></Image> : <Text style={RStyles.text}>{this.props.proteinFlavors}</Text>}
          </Panel>
          <Panel color={styles.greenPanel} menu={vegetablesMenu} handleChoice={this.handleVegetablesChange.bind(this)}>
            {this.props.vegetables === '' ? <Image style={styles.image} source={require("../assets/img/vegetables.png")}></Image> : <Text style={RStyles.text}>{this.props.vegetables}</Text>}
          </Panel>
          <Panel color={styles.mudPanel} menu={starchesMenu} handleChoice={this.handleStarchesChange.bind(this)}>
            {this.props.starches === '' ? <Image style={styles.image} source={require("../assets/img/starches.png")}></Image> : <Text style={RStyles.text}>{this.props.starches}</Text>}
          </Panel>
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
  }
};

export default connect(mapStateToProps)(Selector);

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    width: containerWidth,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: -75,
  },
  panel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fix: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    width: block * 1.5,
    height: block * 1.5,
    resizeMode: 'cover',
    marginTop: 25,
  },

  orangePanel: {
    backgroundColor: '#fd980a',
    borderColor: '#fd980a',
  },
  bluePanel: {
    backgroundColor: '#00bff3',
    borderColor: '#00bff3',
  },
  greenPanel: {
    backgroundColor: '#16fc06',
    borderColor: '#16fc06',
  },
  mudPanel: {
    backgroundColor: '#dbd110',
    borderColor: '#dbd110',
  },

})