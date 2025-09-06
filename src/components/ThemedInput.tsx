import { useTheme } from '@/ctx/theme';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = React.memo(
  ({
    value,
    onChange,
    placeholder,
  }: {
    value: string;
    onChange: (t: string) => void;
    placeholder?: string;
  }) => {
    const theme = useTheme();
    if (theme === 'dark') {
      return (
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          style={styles.dark}
          placeholderTextColor={'grey'}
        />
      );
    }
    return (
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.light}
      />
    );
  },
);

const styles = StyleSheet.create({
  dark: {
    color: 'white',
  },
  light: {
    color: 'black',
  },
});

export default Input;
