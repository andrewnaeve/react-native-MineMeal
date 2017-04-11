import React from 'react';
import { View } from 'react-native';
import Order from './Order';
import Entry from './components/Entry';
import Loading from './components/Loading';

const Main = ({ auth, scenes }) => {
	return (
      <View style={styles.container}>
          {auth.loggedIn ? <Order /> : <Entry />}
      </View>
	);
};

export default Main;

const styles = {
	container: {
		flex: 1,       
	}
};