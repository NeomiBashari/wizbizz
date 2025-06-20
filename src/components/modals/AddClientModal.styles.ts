import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    color: '#222',
    textAlign: 'left',
  },
  error: {
    color: '#b00020',
    fontSize: 13,
    marginBottom: 4,
    marginLeft: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    fontWeight: '600',
  },
  cancel: {
    backgroundColor: '#eee',
  },
  save: {
    backgroundColor: themeColors.accentSalmon,
  },
  buttonText: {
    fontSize: 16,
    color: '#222',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});

export const placeholderTextColor = '#666';

export default styles;
