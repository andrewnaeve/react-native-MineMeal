import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, View, Image } from 'react-native';
import { Components } from 'expo';
import * as Styling from '../assets/styles/style';

class Loading extends Component {

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0)
    this.state = {
      grow: true
    }
  }

  growMe() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear
      }
    ).start(() => this.shrinkMe())
  }

  shrinkMe() {
    this.spinValue.setValue(1)
    Animated.timing(
      this.spinValue,
      {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear
      }
    ).start(() => this.growMe())
  }

  componentDidMount() {
    this.growMe()
  }

  render() {

    const pulse = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [.8, 1]
    })

    return(
      <View style={styles.container} >
        <Animated.Image style={[styles.image, {transform: [{scale: pulse}]} ]} source={require("../assets/img/mine_finalWORDS.png")} />
      </View>
    );
  }
};


export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Styling.height * .8,
    width: Styling.containerWidth,
    resizeMode: 'cover',
  }
})