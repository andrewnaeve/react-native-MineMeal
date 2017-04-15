import React from 'react';
import { View } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';
import { Stack } from './config/router';

const Main = () => {
	return (
      <View style={styles.container}>
          <Stack />
      </View>
	);
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};