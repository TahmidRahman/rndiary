import ThemedBackground from '@/components/ThemedBackground';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { Text, StyleSheet, View } from 'react-native';
import { useNoteByDate } from 'store/notes';

type ViewProps = NativeStackScreenProps<RootStackParamList, 'View'>;

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const NoEntry = () => {
  return <Text>No entry!</Text>;
};

const Content = ({ date }: { date: string }) => {
  const note = useNoteByDate(date);
  if (!note) return <NoEntry />;
  return (
    <View>
      <Text style={styles.title}>{note.title}</Text>
      <Text>{note.description}</Text>
    </View>
  );
};

const ViewEntry = ({ route }: ViewProps) => {
  const dateOfEntry = route.params.date;
  const heading =
    dateOfEntry === TODAYS_DATE ? "Today's Entry" : `Entry of ${dateOfEntry}`;

  return (
    <ThemedBackground>
      <Text style={styles.heading}>{heading}</Text>
      <Content date={dateOfEntry} />
    </ThemedBackground>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 4,
  },
});

export default ViewEntry;
