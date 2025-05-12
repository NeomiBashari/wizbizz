import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type AppointmentCardProps = {
    client: string;
    time: string;
    service: string;
  };
  
  const AppointmentCard = ({ client, time, service }: AppointmentCardProps) => {
    return (
      <View style={styles.appointment}>
        <View style={styles.appointmentInfo}>
          <Text style={styles.clientName}>{client}</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock" size={12} color="#666" style={styles.clockIcon} />
            <Text style={styles.appointmentTime}>{time}</Text>
          </View>
        </View>
        <View style={styles.serviceTag}>
          <Text style={styles.serviceText}>{service}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    appointment: {
      backgroundColor: '#f8f9fa',
      borderRadius: 12,
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appointmentInfo: {
      flex: 1,
    },
    clientName: {
      fontSize: 14,
      fontWeight: '500',
      color: '#333',
      marginBottom: 2,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    clockIcon: {
      marginRight: 4,
    },
    appointmentTime: {
      fontSize: 12,
      color: '#666',
    },
    serviceTag: {
      backgroundColor: '#f2eeff',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 100,
    },
    serviceText: {
      fontSize: 12,
      color: '#9b87f5',
    },
  });
  
  export default AppointmentCard;