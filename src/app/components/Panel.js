import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import MenuModal from './MenuModal';

import { height, width, containerWidth, block, RStyles } from '../assets/styles/style'; 

export default class Panel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
	}

	handlePress() {
		this.setState({
			modalVisible: true,
		});
	}

	handleChoice(choice) {
		this.props.handleChoice(choice);
		this.setState({
			modalVisible: !this.state.modalVisible
		});
	}

	render() {
		return (
      <TouchableOpacity style={[RStyles.b1, this.props.color, styles.container]} onPress={this.handlePress.bind(this)}>
        <MenuModal visible={this.state.modalVisible} color={this.props.color} menu={this.props.menu} handleChoice={this.handleChoice.bind(this)}/>
        {this.props.children}
      </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});