
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  iconName: string;
  backgroundColor: string;
  iconColor: string;
};
const StatCard = ({ title, value, change, iconName, backgroundColor, iconColor }: StatCardProps) => {
  return (
    <View style={[styles.card, { width: '48%', marginBottom: 16 }]}>
      <View style={styles.cardContent}>
        <View style={[styles.iconContainer, { backgroundColor }]}>
          <Icon name={iconName} size={18} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.change}>{change}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: "#9b87f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: '#666',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 2,
  },
  change: {
    fontSize: 10,
    color: '#22c55e',
  },
});
export default StatCard;