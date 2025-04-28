import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { themeColors, themeStyles } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

type LogInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LogInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Navigating to Home');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error: any) {
      console.error('Error logging in:', error);    
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={themeStyles.loginScreen.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
          <Image source={require('../../assets/images/login.png')} style={themeStyles.loginScreen.image} />
        </View>

        <View style={themeStyles.loginScreen.whiteBackground}>
          <View style={themeStyles.loginScreen.formContainer}>
            <Text style={themeStyles.loginScreen.label}>Email Address</Text>
            <TextInput 
              style={themeStyles.loginScreen.input} 
              placeholder="youre-email" 
              placeholderTextColor={themeColors.placeholderText} 
              value={email}
              onChangeText={setEmail}
            />

            <Text style={themeStyles.loginScreen.label}>Password</Text>
            <TextInput 
              style={themeStyles.loginScreen.input} 
              placeholder="youre-password" 
              placeholderTextColor={themeColors.placeholderText}
              secureTextEntry 
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
              <Text style={themeStyles.loginScreen.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={themeStyles.loginScreen.loginButton} onPress={handleLogin}>
              <Text style={themeStyles.loginScreen.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={themeStyles.loginScreen.orText}>Or</Text>

            <View style={themeStyles.loginScreen.socialButtonsContainer}>
              <TouchableOpacity style={themeStyles.loginScreen.socialButton}>
                <Image source={require('../../assets/images/google.png')} style={themeStyles.loginScreen.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={themeStyles.loginScreen.socialButton}>
                <Image source={require('../../assets/images/apple.png')} style={themeStyles.loginScreen.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={themeStyles.loginScreen.socialButton}>
                <Image source={require('../../assets/images/facebook.png')} style={themeStyles.loginScreen.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={themeStyles.loginScreen.signupContainer}>
            <Text style={themeStyles.loginScreen.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={themeStyles.loginScreen.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;