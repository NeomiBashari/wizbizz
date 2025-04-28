import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { themeStyles } from '../theme/theme'; 

const HomeScreen = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <SafeAreaView style={themeStyles.homeScreen.container}>
      <Text style={themeStyles.homeScreen.title}>Home Page</Text>
      <TouchableOpacity style={themeStyles.homeScreen.logoutButton} onPress={handleLogout}>
        <Text style={themeStyles.homeScreen.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;