import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ClientCard.styles';

interface ClientCardProps {
  clientName: string;
  phoneNumber: string;
  createdAt: string;
  upcomingAppointment?: string;
  onView?: () => void;
  onDelete?: () => void;
  onBlock?: () => void;
  isBlocked?: boolean;
}

const ClientCard: React.FC<ClientCardProps> = ({
  clientName,
  phoneNumber,
  createdAt,
  upcomingAppointment,
  onView,
  onDelete,
  onBlock,
  isBlocked,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{clientName}</Text>
        <Text style={styles.phone}>{phoneNumber}</Text>
        <Text style={styles.created}>Added: {createdAt}</Text>
        {upcomingAppointment && (
          <Text style={styles.appointment}>Next: {upcomingAppointment}</Text>
        )}
        {isBlocked && (
          <Text style={styles.blockedText}>Blocked</Text>
        )}
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.btnView]} onPress={onView}>
          <Text style={styles.btnViewText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnDelete]} onPress={onDelete}>
          <Text style={styles.btnDeleteText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, isBlocked ? styles.btnUnblock : styles.btnBlock]}
          onPress={onBlock}
        >
          <Text style={isBlocked ? styles.btnUnblockText : styles.btnBlockText}>
            {isBlocked ? 'Unblock' : 'Block'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientCard;
