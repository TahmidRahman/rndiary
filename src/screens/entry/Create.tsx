import ThemedBackground from '@/components/ThemedBackground';
import ThemedInput from 'components/ThemedInput';
import ThemedButton from 'components/ThemedButton';
import React from 'react';
import { useState } from 'react';
import { useAddNoteEntry } from 'store/notes';
import ThemedText from 'components/ThemeText';

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const Create = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const addNoteEntry = useAddNoteEntry();

  const handleTitleChange = React.useCallback((t: string) => setTitle(t), []);
  const handleDescChange = React.useCallback((t: string) => setDesc(t), []);

  if (isAdded) {
    return (
      <ThemedBackground>
        <ThemedText>Your note is added for today!</ThemedText>
      </ThemedBackground>
    );
  }

  return (
    <ThemedBackground>
      <ThemedText>{'Todays date is: ' + TODAYS_DATE}</ThemedText>
      <ThemedInput
        value={title}
        onChange={handleTitleChange}
        placeholder="title"
      />
      <ThemedInput
        value={desc}
        onChange={handleDescChange}
        placeholder="description"
      />
      <ThemedButton
        onClick={() => {
          addNoteEntry(title, desc, TODAYS_DATE);
          setIsAdded(true);
        }}
      >
        Add
      </ThemedButton>
    </ThemedBackground>
  );
};

export default Create;
