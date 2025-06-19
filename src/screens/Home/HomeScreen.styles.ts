import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: themeColors.textPrimary,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default styles;
