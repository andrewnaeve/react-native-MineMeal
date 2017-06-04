import React, { Component } from 'react';
import {
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
import Panel from './Panel';

import {
  proteinMenu,
  proteinFlavorsMenu,
  vegetablesMenu,
  starchesMenu,
} from './Menus';
import {
  height,
  width,
  containerWidth,
  block,
  RStyles,
} from '../assets/styles/style';

const Selector = ({
  navigation,
  updateProtein,
  updateProteinFlavors,
  updateVegetables,
  updateStarches,
  currentMeal,
}) => (
  <View style={styles.fix}>
    <View style={styles.container}>
      <Panel
        navigation={navigation}
        screenProps={{
          color: styles.orangePanel,
          menu: proteinMenu,
          handleChoice: updateProtein,
        }}
        style={styles.panel}
      >
        {currentMeal.protein === ''
          ? <Image
              style={styles.image}
              source={require('../assets/img/protein.png')}
            />
          : <Text style={RStyles.text}>{currentMeal.protein}</Text>}
      </Panel>
      <Panel
        navigation={navigation}
        screenProps={{
          color: styles.bluePanel,
          menu: proteinFlavorsMenu,
          handleChoice: updateProteinFlavors,
        }}
        style={styles.panel}
      >
        {currentMeal.proteinFlavors === ''
          ? <Image
              style={styles.image}
              source={require('../assets/img/proteinFlavors.png')}
            />
          : <Text style={RStyles.text}>{currentMeal.proteinFlavors}</Text>}
      </Panel>
      <Panel
        navigation={navigation}
        screenProps={{
          color: styles.greenPanel,
          menu: vegetablesMenu,
          handleChoice: updateVegetables,
        }}
        style={styles.panel}
      >
        {currentMeal.vegetables === ''
          ? <Image
              style={styles.image}
              source={require('../assets/img/vegetables.png')}
            />
          : <Text style={RStyles.text}>{currentMeal.vegetables}</Text>}
      </Panel>
      <Panel
        navigation={navigation}
        screenProps={{
          color: styles.mudPanel,
          menu: starchesMenu,
          handleChoice: updateStarches,
        }}
        style={styles.panel}
      >
        {currentMeal.starches === ''
          ? <Image
              style={styles.image}
              source={require('../assets/img/starches.png')}
            />
          : <Text style={RStyles.text}>{currentMeal.starches}</Text>}
      </Panel>
    </View>
  </View>
);

export default Selector;

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
    color: '#fd980a',
  },
  bluePanel: {
    backgroundColor: '#00bff3',
    borderColor: '#00bff3',
    color: '#00bff3',
  },
  greenPanel: {
    backgroundColor: '#16fc06',
    borderColor: '#16fc06',
    color: '#16fc06',
  },
  mudPanel: {
    backgroundColor: '#dbd110',
    borderColor: '#dbd110',
    color: '#dbd110',
  },
});
