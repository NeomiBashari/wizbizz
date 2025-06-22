import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import clientsData from '../../data/clients';
import ClientCard from '../../components/business/ClientCard/ClientCard';
import AddClientModal from '../../components/modals/AddClientModal';
import styles from './ClientsListScreen.styles';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ClientsListScreen: React.FC = () => {
  const [clients, setClients] = useState(clientsData);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const filteredClients = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    const searchPhone = search.replace(/\D/g, '');
    if (!searchValue && !searchPhone) return clients;
    return clients.filter(client => {
      const nameValue = client.fullName.trim().toLowerCase();
      const phoneValue = client.phoneNumber.replace(/\D/g, '');
      if (searchValue && !searchPhone) return nameValue.includes(searchValue);
      if (!searchValue && searchPhone) return phoneValue.includes(searchPhone);
      return nameValue.includes(searchValue) || phoneValue.includes(searchPhone);
    });
  }, [clients, search]);

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
    Alert.alert(
      isBlocked ? 'Unblock Client' : 'Block Client',
      isBlocked
        ? `Are you sure you want to unblock ${name}? They will be able to book appointments again.`
        : `Are you sure you want to block ${name}? They will not be able to book appointments until unblocked.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: isBlocked ? 'Unblock' : 'Block',
          style: isBlocked ? 'default' : 'destructive',
          onPress: () => setClients(prev => prev.map(client => client.id === id ? { ...client, isBlocked: !isBlocked } : client)),
        },
      ]
    );
  };

  const handleNavigateToClientProfile = (clientId: string) => {
    navigation.navigate('ClientProfile', { clientId });
  };

  const renderItem = ({ item }: any) => (
    <ClientCard
      clientName={item.fullName}
      phoneNumber={item.phoneNumber}
      createdAt={item.createdAt}
      onPress={() => handleNavigateToClientProfile(item.id)}
      onDelete={() => handleDeleteClient(item.id, item.fullName)}
      onBlock={() => handleToggleBlockClient(item.id, !!item.isBlocked, item.fullName)}
      isBlocked={item.isBlocked}
    />
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
          <Image source={require('../../../assets/images/clients-icon.png')} style={styles.emptyImage} />
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
