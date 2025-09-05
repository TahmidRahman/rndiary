import { Pressable, StyleSheet, ViewStyle, View, Text } from 'react-native';
import { useTheme } from '@/ctx/theme';

const ThemedButton = ({
  onClick,
  children,
  style,
}: {
  onClick: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onClick}>
      <View
        style={[
          theme === 'dark' ? styles.containerDark : styles.containerLight,
          style,
        ]}
      >
        <Text style={theme === 'dark' ? styles.textDark : styles.textLight}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 16,
  },
  containerLight: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 16,
  },
  textDark: {
    color: 'white',
  },
  textLight: {
    color: 'black',
  },
});

export default ThemedButton;
