import { StyleSheet, View } from 'react-native';
import { useTheme } from '@/ctx/theme';

const ThemedBackground = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <View
      style={theme === 'dark' ? styles.containerDark : styles.containerLight}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: '#000080', //navy blue
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLight: {
    backgroundColor: 'cyan',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemedBackground;
