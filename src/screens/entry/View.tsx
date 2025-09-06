import ThemedBackground from '@/components/ThemedBackground';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemedText from '@/components/ThemeText';
import { RootStackParamList } from '@/navigation/RootStack';
import { StyleSheet, View } from 'react-native';
import { useNoteByDate } from '@/store/notes';
import { getDateYMD } from '@/utils/date';

type ViewProps = NativeStackScreenProps<RootStackParamList, 'View'>;

const NoEntry = () => {
  return <ThemedText>No entry!</ThemedText>;
};

const Content = ({ date }: { date: string }) => {
  const note = useNoteByDate(date);
  if (!note) return <NoEntry />;
  return (
    <View style={styles.center}>
      <ThemedText style={styles.title}>{note.title}</ThemedText>
      <ThemedText>{note.description}</ThemedText>
    </View>
  );
};

const ViewEntry = ({ route }: ViewProps) => {
  const todayYMD = getDateYMD(new Date());
  const dateOfEntry = route.params.date;
  const heading =
    dateOfEntry === todayYMD ? "Today's Entry" : `Entry of ${dateOfEntry}`;

  return (
    <ThemedBackground>
      <ThemedText style={styles.heading}>{heading}</ThemedText>
      <Content date={dateOfEntry} />
    </ThemedBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
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
