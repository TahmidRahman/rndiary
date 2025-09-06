import { useTheme } from '@/ctx/theme';
import { StyleSheet, Text, TextStyle } from 'react-native';

const ThemedText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) => {
  const theme = useTheme();
  return (
    <Text style={[theme === 'dark' ? styles.dark : styles.light, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  dark: {
    color: 'white',
  },
  light: {
    color: 'black',
  },
});

export default ThemedText;
