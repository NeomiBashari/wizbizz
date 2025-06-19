import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    color: themeColors.textPrimary,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
  actions: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  signupBtn: {
    paddingVertical: 15,
    backgroundColor: themeColors.buttonBg,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  signupBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.buttonText,
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLabel: {
    color: themeColors.textSecondary,
    fontWeight: '600',
  },
  loginLink: {
    fontWeight: '600',
    color: themeColors.linkText,
    marginLeft: 5,
  },
});

export default styles;
