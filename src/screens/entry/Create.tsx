import ThemedBackground from '@/components/ThemedBackground';
import ThemedButton from 'components/ThemedButton';
import { useCallback, useState } from 'react';
import { TextInput, Text } from 'react-native';
import { useAddNoteEntry } from 'store/notes';

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const Create = () => {
  const [title, setTile] = useState('');
  const [desc, setDesc] = useState('');
  const addNoteEntry = useAddNoteEntry();

  const Title = useCallback(
    () => (
      <TextInput
        value={title}
        onChangeText={t => setTile(t)}
        placeholder="title"
      />
    ),
    [title],
  );

  const Desc = useCallback(
    () => (
      <TextInput
        value={desc}
        onChangeText={t => setDesc(t)}
        placeholder="description"
      />
    ),
    [desc],
  );

  return (
    <ThemedBackground>
      <Text>{'Todays date is: ' + TODAYS_DATE}</Text>
      <Title />
      <Desc />
      <ThemedButton onClick={() => addNoteEntry(title, desc, TODAYS_DATE)}>
        Add
      </ThemedButton>
    </ThemedBackground>
  );
};

export default Create;
