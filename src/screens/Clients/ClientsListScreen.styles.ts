import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222',
    marginBottom: 18,
    alignSelf: 'center',
  },
  listContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6a4cff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  emptyImage: {
    width: 90,
    height: 90,
    marginBottom: 18,
    opacity: 0.5,
  },
  emptyText: {
    color: '#888',
    fontSize: 18,
  },
});

export default styles;
