import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import styles from './LoginScreen.styles';

type LogInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LogInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/images/login.png')} style={styles.image} />
        </View>

        <View style={styles.whiteBackground}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput 
              style={styles.input} 
              placeholder="youre-email" 
              placeholderTextColor="#999" 
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="youre-password" 
              placeholderTextColor="#999"
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
                <Image source={require('../../../assets/icons/google.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../../assets/icons/apple.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../../../assets/icons/facebook.png')} style={styles.socialIcon} />
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

export default LoginScreen;