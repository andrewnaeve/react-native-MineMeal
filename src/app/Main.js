import React from 'react';
import { View } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';
import { Login } from './config/router';

const Main = () => {
	return (
    <View style={styles.container}>
      <Login />
    </View>
	);
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};