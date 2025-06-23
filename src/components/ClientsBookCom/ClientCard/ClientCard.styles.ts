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
  cardPressed: {
    backgroundColor: '#f0f0f0', 
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
    backgroundColor: '#e0f7fa',
    borderWidth: 1,
    borderColor: '#00bcd4',
  },
  btnUnblockText: {
    color: '#00bcd4',
    fontWeight: '700',
    fontSize: 13,
  },
  menuButton: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    shadowColor: '#000',
    shadowOpacity: 0.18, // חיזוק הצללה
    shadowRadius: 8, // חיזוק הצללה
    shadowOffset: { width: 0, height: 3 }, // חיזוק הצללה
    elevation: 6, // חיזוק הצללה
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 180,
    shadowColor: '#000',
    shadowOpacity: 0.13,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    alignItems: 'flex-start',
  },
  menuItem: {
    paddingVertical: 10,
    width: '100%',
  },
  menuItemDelete: {
    color: '#d32f2f',
    fontWeight: '700',
    fontSize: 16,
  },
  menuItemBlock: {
    color: '#b00020',
    fontWeight: '600',
    fontSize: 16,
  },
  menuItemUnblock: {
    color: '#219653',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
