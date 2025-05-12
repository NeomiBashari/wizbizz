import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import AppointmentCard from '../components/AppointmentCard';
import StatCard from '../components/StatCard';
import { Calendar } from '../components/Calendar';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const upcomingAppointments = [
  { client: "Emily Wilson", time: "10:00 AM", service: "Hair Styling" },
  { client: "Michael Brown", time: "11:30 AM", service: "Beard Trim" },
  { client: "Jessica Lee", time: "1:15 PM", service: "Full Makeup" },
  { client: "David Chen", time: "3:00 PM", service: "Hair Coloring" },
  { client: "Sophia Green", time: "4:30 PM", service: "Nail Art" },
  { client: "John Doe", time: "5:00 PM", service: "Haircut" },
  { client: "Anna Smith", time: "5:15 PM", service: "Blow Dry" },
  { client: "Chris Johnson", time: "5:30 PM", service: "Shaving" },
  { client: "Laura Brown", time: "6:00 PM", service: "Hair Treatment" },
  { client: "James White", time: "6:15 PM", service: "Manicure" },
  { client: "Olivia Davis", time: "7:00 PM", service: "Pedicure" },
];

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
];
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [date, setDate] = useState(new Date());

  const getSortedAppointments = () => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const parseTimeToMinutes = (time: string) => {
      const [hourMinute, period] = time.split(" ");
      const [hours, minutes] = hourMinute.split(":").map(Number);
      const totalMinutes = hours % 12 * 60 + minutes + (period === "PM" ? 720 : 0);
      return totalMinutes;
    };

    return upcomingAppointments
      .filter(appointment => parseTimeToMinutes(appointment.time) >= currentTime)
      .sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
  };

  const sortedAppointments = getSortedAppointments();

  const handleLogout = () => {
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back, Neomi!</Text>
        <Text style={styles.subtitle}>Here's an overview of your business performance.</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatCard 
            title="Appointments" 
            value="24" 
            change="↑ 12% from last week" 
            iconName="calendar" 
            backgroundColor="#f2eeff"
            iconColor="#9b87f5" 
          />
          
          <StatCard 
            title="Clients" 
            value="156" 
            change="↑ 5% from last month" 
            iconName="users" 
            backgroundColor="#ffeef2"
            iconColor="#9b87f5" 
          />
          
          <StatCard 
            title="Hours Booked" 
            value="47.5" 
            change="↑ 8% from last week" 
            iconName="clock" 
            backgroundColor="#e1f0ff"
            iconColor="#9b87f5" 
          />
          
          <StatCard 
            title="Revenue" 
            value="$2,450" 
            change="↑ 15% from last week" 
            iconName="bar-chart-2" 
            backgroundColor="#e1f5eb"
            iconColor="#9b87f5" 
          />
        </View>
        <View style={styles.chartCard}>
          <Text style={styles.cardTitle}>Monthly Revenue</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Revenue Chart</Text>
            <Text style={styles.chartPlaceholderSubtext}>Charts in React Native require additional libraries</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Today's Appointments */}
        <View style={styles.appointmentsCard}>
          <Text style={styles.cardTitle}>Today's Appointments</Text>
          <ScrollView style={styles.appointmentsScroll} nestedScrollEnabled>
            {sortedAppointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                client={appointment.client}
                time={appointment.time}
                service={appointment.service}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
        <View style={styles.calendarCard}>
          <Text style={styles.cardTitle}>Calendar</Text>
          <Calendar 
            selectedDate={date}
            onSelectDate={(newDate) => setDate(newDate)}
          />
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#9b87f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  appointmentsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#9b87f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  calendarCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#9b87f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  appointmentsScroll: {
    maxHeight: 200,
  },
  appointmentsContainer: {
    gap: 10,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  chartPlaceholderSubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: '#9b87f5',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 16,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default HomeScreen;