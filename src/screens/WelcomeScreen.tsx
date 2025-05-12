import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 80 }}>
      <Text style={{ color: themeColors.textPrimary, fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
        Let's Get Started!
      </Text>

    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
      <Image source={require('../../assets/images/welcome.png')} style={{ width: 350, height: 250 }} />
    </View>
</View>

      <View style={{ width: '100%', paddingHorizontal: 20, marginBottom: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            paddingVertical: 15,
            backgroundColor: themeColors.buttonBg,
            borderRadius: 10,
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: themeColors.buttonText }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: themeColors.textSecondary, fontWeight: '600' }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontWeight: '600', color: themeColors.linkText, marginLeft: 5 }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;