import React from 'react';
import { View, Text } from 'react-native';
import styles from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
  );
};

export default HomeScreen;
