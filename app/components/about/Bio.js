import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Modal, ListView, TouchableOpacity, FlatList } from 'react-native';
import * as stylings from '../../assets/styles/style';

// import Icon from 'react-native-vector-icons/Ionicons';

const Bio = () => (
  <View style={styles.ob}>
    <FlatList style={styles.container}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      data={[about, babout, cabout, dabout]}
      renderItem={({item, index}) => <Text>{item.key}</Text>} />
  </View>
);

export default Bio;

const styles = StyleSheet.create({

  container: {
    width: stylings.width * 0.8,
    height: 20,
    backgroundColor: '#F8F4FF',
    borderRadius: 10
  },
  ob: {
    marginTop: 30,
    height: stylings.height * 0.2
  }
});

const about = {
  key: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'
};
const babout = {
  key: 'Laorem ipsum dolor sist ametLorem ipsum dolor sit ametLorem ipsaum dolor sit ametLorem ipsum dolor sit amet'
};
const cabout = {
  key: 'asdfLaorem ipsum dolor sist ametLorem ipsum dolor sit ametLorem ipsaum dolor sit ametLorem ipsum dolor sit amet'
};
const dabout = {
  key: 'asdfasdfLaorem ipsum dolor sist ametLorem ipsum dolor sit ametLorem ipsaum dolor sit ametLorem ipsum dolor sit amet'
};
