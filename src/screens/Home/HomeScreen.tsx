import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './HomeScreen.styles';
import clients from '../../data/clients';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const SectionCard = ({ icon, label, onPress }: { icon: any; label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.sectionCard} onPress={onPress}>
    <View style={styles.sectionCardIconWrapper}>
      <Image source={icon} style={styles.sectionCardIcon} />
    </View>
    <Text style={styles.sectionCardLabel}>{label}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const recentClients = clients.slice(0, 10);

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Hello! Welcome</Text>
        <Text style={styles.heroSubtitle}>Here Your Smart Business Hub</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }} style={styles.scrollView} >
        <View style={styles.sectionGrid}>
          <SectionCard
            icon={require('../../../assets/images/clients-icon.png')}
            label="All Clients"
            onPress={() => navigation.navigate('ClientsList')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
