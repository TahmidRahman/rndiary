import ThemedBackground from '@/components/ThemedBackground';
import Input from 'components/Input';
import ThemedButton from 'components/ThemedButton';
import React from 'react';
import { useState } from 'react';
import { Text } from 'react-native';
import { useAddNoteEntry } from 'store/notes';

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const Create = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const addNoteEntry = useAddNoteEntry();

  const handleTitleChange = React.useCallback((t: string) => setTitle(t), []);
  const handleDescChange = React.useCallback((t: string) => setDesc(t), []);

  return (
    <ThemedBackground>
      <Text>{'Todays date is: ' + TODAYS_DATE}</Text>
      <Input value={title} onChange={handleTitleChange} placeholder="title" />
      <Input
        value={desc}
        onChange={handleDescChange}
        placeholder="description"
      />
      <ThemedButton onClick={() => addNoteEntry(title, desc, TODAYS_DATE)}>
        Add
      </ThemedButton>
    </ThemedBackground>
  );
};

export default Create;
