import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, ToastAndroid, Platform, Alert } from 'react-native';
import styles, { placeholderTextColor } from './AddClientModal.styles';

interface AddClientModalProps {
  visible: boolean;
  onClose: () => void;
  onAddClient: (client: { fullName: string; phoneNumber: string; email: string; notes: string }) => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ visible, onClose, onAddClient }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});

  const reset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setNotes('');
    setErrors({});
  };

  const handleSave = () => {
    let newErrors: typeof errors = {};
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    onAddClient({ fullName, phoneNumber, email, notes });
    reset();
    onClose();
    if (Platform.OS === 'android') ToastAndroid.show('Client added!', ToastAndroid.SHORT);
    else Alert.alert('Client added!');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Add New Client</Text>
          <TextInput
            style={styles.input}
            placeholder="Client Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor={placeholderTextColor}
          />
          {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Client Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholderTextColor={placeholderTextColor}
            returnKeyType="done"
            blurOnSubmit={true}
          />
          {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Client Email Address, optional"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={placeholderTextColor}
          />
          <TextInput
            style={[styles.input, { height: 60 }]}
            placeholder="Notes, optional"
            value={notes}
            onChangeText={setNotes}
            multiline
            placeholderTextColor={placeholderTextColor}
          />
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.button, styles.cancel]} onPress={() => { reset(); onClose(); }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.save]} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddClientModal;
