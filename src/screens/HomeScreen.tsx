import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeStyles } from '../theme/theme'; 

const HomeScreen = () => {

  return (
    <SafeAreaView style={themeStyles.homeScreen.container}>
      <Text style={themeStyles.homeScreen.title}>Home Page</Text>
      <TouchableOpacity style={themeStyles.homeScreen.logoutButton}>
        <Text style={themeStyles.homeScreen.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;