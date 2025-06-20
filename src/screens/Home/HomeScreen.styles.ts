import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
    paddingTop: 0,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: themeColors.textPrimary,
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
    backgroundColor: themeColors.inputBackground,
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
    color: themeColors.textPrimary,
    fontWeight: '500',
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: themeColors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  heroSubtitle: {
    fontSize: 18,
    color: themeColors.textPrimary,
    opacity: 0.92,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.2,
    textShadowColor: 'rgba(0,0,0,0.06)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  scrollView: {
    backgroundColor: themeColors.white,
    borderRadius: 32,
  }
});

export default styles;
