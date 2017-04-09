import React from 'react';
import { View } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';

const Main = ({ auth }) => {
	return (
        <View style={styles.container}>
          <Entry />
        </View>
	);
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};