import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from './HomeScreen.styles';
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

const sectionCards = [
  {
    icon: require('../../../assets/icons/clients-icon.png'),
    label: 'Clients Book',
    onPress: (navigation: any) => navigation.navigate('ClientsList'),
  },
  {
    icon: require('../../../assets/icons/calendar-icon.png'),
    label: 'Appointments',
    onPress: () => {},
  },
  {
    icon: require('../../../assets/icons/messages-icon.png'),
    label: 'Messages',
    onPress: () => {},
  },
    {
    icon: require('../../../assets/icons/employees-icon.png'),
    label: 'Employees',
    onPress: () => {},
  },
  {
    icon: require('../../../assets/icons/statistics-icon.png'),
    label: 'Statistics',
    onPress: () => {},
  },
  {
    icon: require('../../../assets/icons/payments-icon.png'),
    label: 'Payments',
    onPress: () => {},
  },
  {
    icon: require('../../../assets/icons/settings-icon.png'),
    label: 'Settings',
    onPress: () => {},
  },
  {
    icon: require('../../../assets/icons/support-icon.png'),
    label: 'Support',
    onPress: () => {},
  },
];

function getCardsPerRow() {
  const screenWidth = Dimensions.get('window').width;
  if (screenWidth >= 700) return 4;
  if (screenWidth >= 500) return 3;
  return 2;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const cardsPerRow = getCardsPerRow();
  const cardRows = chunkArray(sectionCards, cardsPerRow);

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Hello! Welcome</Text>
        <Text style={styles.heroSubtitle}>Here Your Smart Business Hub</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }} style={styles.scrollView}>
        {cardRows.map((row, idx) => (
          <View style={styles.sectionGrid} key={idx}>
            {row.map(card => (
              <SectionCard
                key={card.label}
                icon={card.icon}
                label={card.label}
                onPress={() => card.onPress(navigation)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
