import React from 'react';
import { TextInput } from 'react-native';

const Input = React.memo(
  ({
    value,
    onChange,
    placeholder,
  }: {
    value: string;
    onChange: (t: string) => void;
    placeholder?: string;
  }) => (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  ),
);

export default Input;
