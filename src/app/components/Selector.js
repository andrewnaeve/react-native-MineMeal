import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import Panel from './Panel';

import { proteinMenu, proteinFlavorsMenu, vegetablesMenu, starchesMenu } from './Menus';
import { height, width, containerWidth, block, RStyles } from '../assets/styles/style'; 

const Selector = ({ currentMeal, updateProtein, updateProteinFlavors, updateVegetables, updateStarches}) => {
	return(
    <View style={styles.fix}>
      <View style={styles.container}>
        <Panel style={styles.panel} color={styles.orangePanel} menu={proteinMenu} handleChoice={updateProtein}>
            {currentMeal.protein === '' ? <Image style={styles.image} source={require('../assets/img/protein.png')}></Image> : <Text style={RStyles.text}>{currentMeal.protein}</Text>}
        </Panel>
        <Panel color={styles.bluePanel} menu={proteinFlavorsMenu} handleChoice={updateProteinFlavors}>
          {currentMeal.proteinFlavors === '' ? <Image style={styles.image} source={require('../assets/img/proteinFlavors.png')}></Image> : <Text style={RStyles.text}>{currentMeal.proteinFlavors}</Text>}
        </Panel>
        <Panel color={styles.greenPanel} menu={vegetablesMenu} handleChoice={updateVegetables}>
          {currentMeal.vegetables === '' ? <Image style={styles.image} source={require('../assets/img/vegetables.png')}></Image> : <Text style={RStyles.text}>{currentMeal.vegetables}</Text>}
        </Panel>
        <Panel color={styles.mudPanel} menu={starchesMenu} handleChoice={updateStarches}>
          {currentMeal.starches === '' ? <Image style={styles.image} source={require('../assets/img/starches.png')}></Image> : <Text style={RStyles.text}>{currentMeal.starches}</Text>}
        </Panel>
      </View>
    </View>
	); 
};

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

});