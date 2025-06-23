import React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ClientCard.styles';

interface ClientCardProps {
  clientName: string;
  phoneNumber: string;
  createdAt: string;
  onPress?: () => void;
  onDelete?: () => void;
  onBlock?: () => void;
  isBlocked?: boolean;
}

const ClientCard: React.FC<ClientCardProps> = ({
  clientName,
  phoneNumber,
  createdAt,
  onPress,
  onDelete,
  onBlock,
  isBlocked,
}) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.info}>
        <Text style={styles.name}>{clientName}</Text>
        <Text style={styles.phone}>{phoneNumber}</Text>
        <Text style={styles.created}>Added: {createdAt}</Text>
        {isBlocked && (
          <Text style={styles.blockedText}>Blocked</Text>
        )}
      </View>
      <View style={styles.actions}>
        <Pressable
          style={styles.menuButton}
          onPress={() => setMenuVisible(true)}
          hitSlop={10}
        >
          <Ionicons name="ellipsis-vertical" size={22} color="#888" />
        </Pressable>
        <Modal
          visible={menuVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <Pressable style={styles.menuOverlay} onPress={() => setMenuVisible(false)}>
            <View style={styles.menuContainer}>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); onDelete && onDelete(); }}>
                <Text style={styles.menuItemDelete}>Delete Client</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); onBlock && onBlock(); }}>
                <Text style={isBlocked ? styles.menuItemUnblock : styles.menuItemBlock}>
                  {isBlocked ? 'Unblock Client' : 'Block Client'}
                </Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>
    </Pressable>
  );
};

export default ClientCard;
