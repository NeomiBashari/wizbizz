import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { themeColors, themeStyles } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
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
          <Image source={require('../../assets/images/signup.png')} style={themeStyles.loginScreen.image} />
        </View>

        <View style={themeStyles.signupScreen.whiteBackground}>
          <View style={themeStyles.signupScreen.formContainer}>
            <Text style={themeStyles.signupScreen.label}>Full Name</Text>
            <TextInput 
              style={themeStyles.signupScreen.input} 
              placeholder="john snow" 
              placeholderTextColor={themeColors.placeholderText} 
            />

            <Text style={themeStyles.signupScreen.label}>Email Address</Text>
            <TextInput 
              style={themeStyles.signupScreen.input} 
              placeholder="john@gmail.com" 
              placeholderTextColor={themeColors.placeholderText} 
            />

            <Text style={themeStyles.signupScreen.label}>Password</Text>
            <TextInput 
              style={themeStyles.signupScreen.input} 
              placeholder="********" 
              placeholderTextColor={themeColors.placeholderText}
              secureTextEntry 
            />

            <TouchableOpacity style={themeStyles.signupScreen.loginButton}>
              <Text style={themeStyles.loginScreen.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={themeStyles.signupScreen.orText}>Or</Text>

          <View style={themeStyles.signupScreen.socialButtonsContainer}>
            <TouchableOpacity style={themeStyles.signupScreen.socialButton}>
              <Image source={require('../../assets/images/google.png')} style={themeStyles.loginScreen.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={themeStyles.signupScreen.socialButton}>
              <Image source={require('../../assets/images/apple.png')} style={themeStyles.loginScreen.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={themeStyles.signupScreen.socialButton}>
              <Image source={require('../../assets/images/facebook.png')} style={themeStyles.loginScreen.socialIcon} />
            </TouchableOpacity>
          </View>

          <View style={themeStyles.signupScreen.signupContainer}>
            <Text style={themeStyles.signupScreen.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={themeStyles.signupScreen.signupLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;