import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { themeColors } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

type LogInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LogInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
          <Image source={require('../../assets/images/login.png')} style={styles.image} />
        </View>

        <View style={styles.whiteBackground}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput 
              style={styles.input} 
              placeholder="youre-email" 
              placeholderTextColor={themeColors.placeholderText} 
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="youre-password" 
              placeholderTextColor={themeColors.placeholderText}
              secureTextEntry 
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or</Text>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: themeColors.buttonBg,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: Dimensions.get('window').width - 40,
    height: 40,
    borderWidth: 1,
    borderColor: themeColors.inputBorder,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: themeColors.inputBackground,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#000',
  },
  loginButton: {
    backgroundColor: themeColors.buttonBg,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.buttonText,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 50,
    marginBottom: 0,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -5,
  },
  signupText: {
    fontSize: 14,
    color: '#999',
  },
  signupLink: {
    fontSize: 14,
    color: themeColors.linkText,
    fontWeight: 'bold',
  },
});

export default LoginScreen;