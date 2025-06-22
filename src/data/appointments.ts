import { faker } from '@faker-js/faker';

export interface Appointment {
  id: string;
  clientId: string;
  date: string; // ISO string
  status: 'done' | 'canceled' | 'upcoming';
  notes?: string;
}

export function generateFakeAppointmentsForClients(clientIds: string[], countPerClient: number): Appointment[] {
  return clientIds.flatMap(clientId => {
    return Array.from({ length: countPerClient }, () => {
      const statusRand = faker.number.int({ min: 0, max: 2 });
      let status: 'done' | 'canceled' | 'upcoming' = 'upcoming';
      if (statusRand === 0) status = 'done';
      if (statusRand === 1) status = 'canceled';
      const date = status === 'upcoming'
        ? faker.date.soon({ days: 30 }).toISOString()
        : faker.date.past({ years: 1 }).toISOString();
      return {
        id: faker.string.uuid(),
        clientId,
        date,
        status,
        notes: faker.lorem.sentence(),
      };
    });
  });
}

export function getAppointmentsByClientId(appointments: Appointment[], clientId: string): Appointment[] {
  return appointments.filter(app => app.clientId === clientId);
}
