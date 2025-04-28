import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { themeColors, themeStyles } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

type LogInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LogInScreenProps) => {
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

        {/* תמונה */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
          <Image source={require('../../assets/images/login.png')} style={themeStyles.loginScreen.image} />
        </View>

        <View style={themeStyles.loginScreen.whiteBackground}>
          <View style={themeStyles.loginScreen.formContainer}>
            <Text style={themeStyles.loginScreen.label}>Email Address</Text>
            <TextInput 
              style={themeStyles.loginScreen.input} 
              placeholder="john@gmail.com" 
              placeholderTextColor={themeColors.placeholderText} 
            />

            <Text style={themeStyles.loginScreen.label}>Password</Text>
            <TextInput 
              style={themeStyles.loginScreen.input} 
              placeholder="********" 
              placeholderTextColor={themeColors.placeholderText}
              secureTextEntry 
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
              <Text style={themeStyles.loginScreen.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={themeStyles.loginScreen.loginButton}>
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