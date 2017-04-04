import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const containerWidth = width * .95;
const block = containerWidth * .48;

const RStyles = StyleSheet.create({
  
  blurb: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  b1: {
    borderRadius: 5,
    alignItems: 'center',
    height: block,
    width: block,
    marginBottom: 10,

  },
  
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  
  
}) 

export { height, width, block, containerWidth, RStyles }
