import { useState, useCallback } from 'react';
import type { Client } from '../data/clients';
import initialClients from '../data/clients';

export function useClients() {
  const [clients, setClients] = useState<Client[]>(initialClients);

  const getClients = useCallback(() => clients, [clients]);

  const addClient = useCallback((client: Omit<Client, 'id' | 'createdAt'>) => {
    const newClient: Client = {
      ...client,
      id: Math.random().toString(36).slice(2),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setClients(prev => [newClient, ...prev]);
    return newClient;
  }, []);

  const deleteClient = useCallback((id: string) => {
    setClients(prev => prev.filter(c => c.id !== id));
  }, []);

  const getClientById = useCallback((id: string) => {
    return clients.find(c => c.id === id);
  }, [clients]);

  return {
    clients,
    getClients,
    addClient,
    deleteClient,
    getClientById,
  };
}
