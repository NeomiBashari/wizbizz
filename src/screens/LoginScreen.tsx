// src/screens/LoginScreen.tsx

import React from 'react';
import { View, Alert } from 'react-native';
import AuthForm from '../components/AuthForm';
import { login } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

// Defines navigation types for TypeScript safety
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Handles login form submission
  const handleLogin = async (username: string, password: string) => {
    try {
      const success = await login(username, password);
      if (success) {
        navigation.navigate('Home'); // replace 'Home' with your next screen
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View>
      <AuthForm onSubmit={handleLogin} />
    </View>
  );
};

export default LoginScreen;
