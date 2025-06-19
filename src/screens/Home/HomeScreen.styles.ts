import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 8,
  },
  clientsList: {
    gap: 8,
    marginBottom: 12,
  },
  recentClientsList: {
    maxHeight: 220,
    marginBottom: 12,
  },
  linkText: {
    color: '#6a4cff',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 8,
  },
  sectionGrid: {
    flexDirection: 'row',
    gap: 16,
    marginHorizontal: 8,
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 110,
    height: 110,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionCardIconWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 32,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  sectionCardIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  sectionCardLabel: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
});

export default styles;
