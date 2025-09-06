/* eslint-disable react-native/no-inline-styles */
import ThemedBackground from 'components/ThemedBackground';
import ThemedButton from 'components/ThemedButton';
import { useNavigation } from '@react-navigation/native';

const TODAYS_DATE = new Date().toISOString().split('T')[0];

const Home = () => {
  const navigation = useNavigation();
  return (
    <ThemedBackground>
      <ThemedButton
        onClick={() => navigation.navigate('Create')}
        style={{ marginBottom: 16 }}
      >
        Create new entry
      </ThemedButton>
      <ThemedButton
        onClick={() => navigation.navigate('View', { date: TODAYS_DATE })}
      >
        Today's entry
      </ThemedButton>
    </ThemedBackground>
  );
};

export default Home;
