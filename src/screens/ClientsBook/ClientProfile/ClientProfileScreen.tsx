import React, { useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import clients from '../../../data/clients';
import { generateFakeAppointmentsForClients, getAppointmentsByClientId, Appointment } from '../../../data/appointments';
import styles from './ClientProfileScreen.styles';

const getStatusStyle = (status: Appointment['status']) => {
  if (status === 'done') return styles.statusDone;
  if (status === 'canceled') return styles.statusCanceled;
  return styles.statusUpcoming;
};

const allAppointments = generateFakeAppointmentsForClients(clients.map(c => c.id), 30);

const ClientProfileScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ClientProfile'>>();
  const { clientId } = route.params;
  const client = clients.find(c => c.id === clientId);
  const appointments = useMemo(() => getAppointmentsByClientId(allAppointments, clientId), [clientId]);
  if (!client) return <View style={styles.container}><Text>Client not found</Text></View>;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{client.fullName}</Text>
      <Text style={styles.phone}>{client.phoneNumber}</Text>
      <Text style={styles.sectionTitle}>Appointments</Text>
      <View style={{ flex: 1, minHeight: 300 }}>
        <ScrollView style={styles.appointmentList}>
          {appointments
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((app, idx, arr) => (
              <View
                key={app.id}
                style={[
                  styles.appointmentRow,
                  idx === arr.length - 1 && styles.lastAppointmentRow,
                ]}
              >
                <View style={styles.appointmentDateTime}>
                  <Text style={styles.appointmentDate}>{
                    new Date(app.date).toLocaleDateString()
                  }</Text>
                  <Text style={styles.appointmentTime}>{
                    new Date(app.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }</Text>
                </View>
                <Text style={[styles.appointmentStatus, getStatusStyle(app.status)]}>
                  {app.status === 'done' && 'Done'}
                  {app.status === 'canceled' && 'Canceled'}
                  {app.status === 'upcoming' && 'Upcoming'}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ClientProfileScreen;
