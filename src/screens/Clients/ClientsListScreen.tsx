import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import clientsData from '../../data/clients';
import ClientCard from '../../components/business/ClientCard/ClientCard';
import AddClientModal from '../../components/modals/AddClientModal';
import styles from './ClientsListScreen.styles';

const ClientsListScreen: React.FC = () => {
  const [clients, setClients] = useState(clientsData);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleAddClient = (client: { fullName: string; phoneNumber: string; email: string; notes: string }) => {
    setClients(prev => [
      {
        ...client,
        id: Math.random().toString(36).slice(2),
        createdAt: new Date().toISOString().split('T')[0],
      },
      ...prev,
    ]);
  };

  const handleDeleteClient = (id: string, name: string) => {
    Alert.alert(
      'Delete Client',
      `Are you sure you want to delete ${name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => setClients(prev => prev.filter(c => c.id !== id)) },
      ]
    );
  };

  const handleToggleBlockClient = (id: string, isBlocked: boolean, name: string) => {
    if (!isBlocked) {
      Alert.alert(
        'Block Client',
        `Are you sure you want to block ${name}? They will not be able to book appointments until unblocked.`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Block', style: 'destructive', onPress: () => setClients(prev => prev.map(client => client.id === id ? { ...client, isBlocked: true } : client)) },
        ]
      );
    } else {
      Alert.alert(
        'Unblock Client',
        `Are you sure you want to unblock ${name}? They will be able to book appointments again.`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Unblock', style: 'default', onPress: () => setClients(prev => prev.map(client => client.id === id ? { ...client, isBlocked: false } : client)) },
        ]
      );
    }
  };

  const filteredClients = clients.filter(client =>
    client.fullName.toLowerCase().includes(search.toLowerCase()) ||
    client.phoneNumber.replace(/\D/g, '').includes(search.replace(/\D/g, ''))
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.cardWrapper}>
      <ClientCard
        clientName={item.fullName}
        phoneNumber={item.phoneNumber}
        createdAt={item.createdAt}
        upcomingAppointment={item.upcomingAppointment}
        onDelete={() => handleDeleteClient(item.id, item.fullName)}
        onBlock={() => handleToggleBlockClient(item.id, !!item.isBlocked, item.fullName)}
        isBlocked={item.isBlocked}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>All Clients</Text>
        <TouchableOpacity style={styles.searchButton} onPress={() => setShowSearch(s => !s)}>
          <Image source={require('../../../assets/images/search-clients-icon.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      {showSearch && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or phone number"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
          autoFocus
        />
      )}
      {filteredClients.length === 0 ? (
        <View style={styles.emptyState}>
          <Image source={require('../../../assets/images/face.png')} style={styles.emptyImage} />
          <Text style={styles.emptyText}>No clients found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredClients}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      <AddClientModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddClient={handleAddClient}
      />
    </View>
  );
};

export default ClientsListScreen;
