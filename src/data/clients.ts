import { faker } from '@faker-js/faker';

export interface Client {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  notes: string;
  upcomingAppointment?: string;
  isBlocked?: boolean;
}

export function generateFakeClients(count: number): Client[] {
  return Array.from({ length: count }, () => {
    const hasAppointment = faker.datatype.boolean();
    return {
      id: faker.string.uuid(),
      fullName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      createdAt: faker.date.past({ years: 2 }).toISOString().split('T')[0],
      notes: faker.lorem.sentence(),
      upcomingAppointment: hasAppointment
        ? faker.date.soon({ days: 30 }).toISOString().replace('T', ' ').slice(0, 16)
        : undefined,
    };
  });
}

const clients: Client[] = generateFakeClients(20);
export default clients;
