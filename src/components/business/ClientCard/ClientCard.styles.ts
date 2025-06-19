import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    minWidth: 0,
    maxWidth: '100%',
    gap: 10,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 1,
  },
  phone: {
    fontSize: 13,
    color: '#666',
  },
  created: {
    fontSize: 12,
    color: '#aaa',
  },
  appointment: {
    fontSize: 13,
    color: '#6a4cff',
    fontWeight: '500',
    marginTop: 1,
  },
  actions: {
    flexDirection: 'column',
    gap: 4,
    marginLeft: 8,
  },
  btn: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    backgroundColor: '#f5f5f5',
  },
  btnDelete: {
    backgroundColor: '#ffd7d7',
  },
  btnViewText: {
    color: '#222',
    fontWeight: '500',
    fontSize: 13,
  },
  btnDeleteText: {
    color: '#b00020',
    fontWeight: '500',
    fontSize: 13,
  },
  blockedText: {
    color: '#b00020',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 2,
  },
  btnBlock: {
    backgroundColor: '#ffe0b2',
  },
  btnBlockText: {
    color: '#b00020',
    fontWeight: '500',
    fontSize: 13,
  },
  btnUnblock: {
    backgroundColor: '#e0f7fa', // טורקיז בהיר, מודרני, מושך תשומת לב
    borderWidth: 1,
    borderColor: '#00bcd4',
  },
  btnUnblockText: {
    color: '#00bcd4',
    fontWeight: '700',
    fontSize: 13,
  },
});

export default styles;
